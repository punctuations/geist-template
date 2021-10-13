import { Tree } from "@geist-ui/react";

export const Defaults = () => {
  return (
    <Tree>
      <Tree.Folder name="public">
        <Tree.File name="favicon.ico" />
        <Tree.File name="vercel.svg" />
      </Tree.Folder>
      <Tree.Folder name="src">
        <Tree.Folder name="components">
          <Tree.File name="defaults.tsx" />
        </Tree.Folder>
        <Tree.Folder name="pages">
          <Tree.Folder name="api">
            <Tree.File name="hello.ts" />
          </Tree.Folder>
          <Tree.File name="_app.tsx" />
          <Tree.File name="index.tsx" />
        </Tree.Folder>

        <Tree.Folder name="styles">
          <Tree.File name="globals.css" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.File name="package.json" />
      <Tree.File name="readme.md" />
    </Tree>
  );
};
