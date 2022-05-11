import jobs from "../data.json";

export default function GetJobId(item) {
  return jobs.find((i) => i.id === item);
}
