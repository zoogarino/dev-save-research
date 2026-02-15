import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Quote,
  Code,
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ content, onChange, placeholder }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const btnClass = (active: boolean) =>
    `p-1.5 rounded transition-colors ${
      active ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-accent"
    }`;

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-border bg-accent/50">
        {/* Heading dropdown */}
        <select
          value={
            editor.isActive("heading", { level: 1 })
              ? "1"
              : editor.isActive("heading", { level: 2 })
                ? "2"
                : editor.isActive("heading", { level: 3 })
                  ? "3"
                  : editor.isActive("heading", { level: 4 })
                    ? "4"
                    : "0"
          }
          onChange={(e) => {
            const level = parseInt(e.target.value);
            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 | 4 }).run();
            }
          }}
          className="px-2 py-1 text-xs border border-border rounded bg-card text-foreground mr-1"
        >
          <option value="0">Normal</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
        </select>

        <div className="w-px h-5 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btnClass(editor.isActive("bold"))}
          title="Bold"
        >
          <Bold size={14} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btnClass(editor.isActive("italic"))}
          title="Italic"
        >
          <Italic size={14} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={btnClass(editor.isActive("underline"))}
          title="Underline"
        >
          <UnderlineIcon size={14} />
        </button>

        <div className="w-px h-5 bg-border mx-1" />

        <input
          type="color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          title="Text Color"
          className="w-6 h-6 rounded cursor-pointer border border-border"
        />
        <input
          type="color"
          onChange={(e) =>
            editor.chain().focus().toggleHighlight({ color: e.target.value }).run()
          }
          title="Highlight"
          className="w-6 h-6 rounded cursor-pointer border border-border"
        />

        <div className="w-px h-5 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btnClass(editor.isActive("bulletList"))}
          title="Bullet List"
        >
          <List size={14} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={btnClass(editor.isActive("orderedList"))}
          title="Numbered List"
        >
          <ListOrdered size={14} />
        </button>

        <div className="w-px h-5 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={btnClass(editor.isActive("blockquote"))}
          title="Quote"
        >
          <Quote size={14} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={btnClass(editor.isActive("codeBlock"))}
          title="Code"
        >
          <Code size={14} />
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="prose-editor min-h-[120px] max-h-[300px] overflow-y-auto px-3 py-2 text-sm text-foreground"
      />
    </div>
  );
};

export default RichTextEditor;
