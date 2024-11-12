import { Handlers, PageProps } from "$fresh/server.ts";
import IframeViewer from "../islands/iframe-viewer.tsx";

interface Data {
  url?: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url).searchParams.get("url") || "";
    return ctx.render({ url });
  },
};

export default function IframePage({ data }: PageProps<Data>) {
  return (
    <div class="flex flex-col page">
      <IframeViewer initialUrl={data.url} />
    </div>
  );
}
