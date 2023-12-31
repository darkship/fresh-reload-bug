import { Handlers } from '$fresh/server.ts';
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export const handler: Handlers<{}> = {
  async GET(_req, ctx) {
    await new Promise(resolve => { setTimeout(resolve, 80)})
    return ctx.render({});
  },
};

export default function Home() {
  console.log('Home')
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh 80</h1>
        <p class="my-4">
          Try updating this message in the 111
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
