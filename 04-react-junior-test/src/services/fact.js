const CAT_FACT_URL = "https://catfact.ninja/fact";

export async function getRandomFact() {
  const res = await fetch(CAT_FACT_URL);
  const data = await res.json();
  const { fact } = data;
  return fact;
}
