import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface IframeViewerProps {
  initialUrl?: string;
}

export default function IframeViewer(
  { initialUrl = "https://www.grekz.com" }: IframeViewerProps,
) {
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const [iframeUrl, setIframeUrl] = useState(initialUrl);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setIframeUrl(inputUrl);
  };

  return (
    <div class="flex flex-col flex-1">
      {!iframeUrl && <h1>Page viewer</h1>}
      {iframeUrl
        ? (
          <iframe
            src={iframeUrl}
            title="Embedded content"
            class="flex-1"
          />
        )
        : <span>You can type the selected page below</span>}
      <form onSubmit={handleSubmit} class="flex form">
        <input
          type="url"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.currentTarget.value)}
          placeholder="Enter URL to display"
          required
          class="flex-1"
          autofocus
        />
        <Button type="submit">
          Load
        </Button>
      </form>
    </div>
  );
}
