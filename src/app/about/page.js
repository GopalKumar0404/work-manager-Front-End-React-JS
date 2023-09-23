async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function about() {
  await takeTime();
  throw new Error("This is manual Error");
  return <div>This is about page</div>;
}
