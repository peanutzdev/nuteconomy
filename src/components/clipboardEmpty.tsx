import { Image } from '@mantine/core';

export interface IclipboardEmptyProps {
}

export function ClipboardEmpty (props: IclipboardEmptyProps) {
  return (
    <div>
      <Image src="./clipboardEmpty.png" alt="clipboardEmpty" width="100%" height="100%"/>
    </div>
  );
}
