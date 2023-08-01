const getTime = async () => {
  const res = await fetch(`http://127.0.0.1:8000/api/time`, {
    cache: "force-cache",
  });

  return res.json();
};

export default async function Home() {
  const data = await getTime();

  return <div className="m-2">{`Server Static Generate ${data}`}</div>;
}
