import { MongoClient } from "mongodb";

type Counts = Record<string, number>;

// MONGODB_URI 가 없으면 서버 메모리에만 저장 (로컬 개발용)
const memory: Counts = {};

const globalForMongo = globalThis as unknown as { _mongo?: Promise<MongoClient> };

function collection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  globalForMongo._mongo ??= new MongoClient(uri).connect();
  return globalForMongo._mongo.then((c) =>
    c.db().collection<{ _id: string; count: number }>("clicks"),
  );
}

export async function getClickCounts(): Promise<Counts> {
  try {
    const col = collection();
    if (!col) return { ...memory };
    const docs = await (await col).find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (e) {
    console.error("클릭 수 조회 실패", e);
    return {};
  }
}

export async function incrementClick(id: string): Promise<void> {
  try {
    const col = collection();
    if (!col) {
      memory[id] = (memory[id] ?? 0) + 1;
      return;
    }
    await (await col).updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  } catch (e) {
    console.error("클릭 수 기록 실패", e);
  }
}
