import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";

async function page() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <>
      {user ? (
        <h1>Plants Inventory</h1>
      ) : (
        <div className="flex justify-center mt-20 items-center">
          <SignUp />
        </div>
      )}
    </>
  );
}

export default page;
