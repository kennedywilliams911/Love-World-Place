(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/editor/RichTextEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichTextEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-text-align/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.mjs [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.mjs [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.mjs [app-client] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.mjs [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-ordered.mjs [app-client] (ecmascript) <export default as ListOrdered>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.mjs [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.mjs [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.mjs [app-client] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-2.mjs [app-client] (ecmascript) <export default as Heading2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-3.mjs [app-client] (ecmascript) <export default as Heading3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.mjs [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.mjs [app-client] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.mjs [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.mjs [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.mjs [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.mjs [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-up.mjs [app-client] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVoiceDictation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVoiceDictation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function ToolbarButton({ onClick, active, label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        title: label,
        "aria-label": label,
        "aria-pressed": active,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-ink-600 transition-colors hover:bg-parchment-200 dark:text-parchment-300 dark:hover:bg-ink-800", active && "bg-gold-100 text-gold-700 dark:bg-ink-800 dark:text-gold-400"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = ToolbarButton;
const languages = [
    {
        code: "en",
        label: "English"
    },
    {
        code: "es",
        label: "Español"
    },
    {
        code: "fr",
        label: "Français"
    },
    {
        code: "it",
        label: "Italiano"
    },
    {
        code: "de",
        label: "Deutsch"
    },
    {
        code: "ig",
        label: "Igbo"
    },
    {
        code: "ha",
        label: "Hausa"
    },
    {
        code: "yo",
        label: "Yorùbá"
    }
];
const normalizeArticleText = (text)=>{
    let normalized = text.replace(/\r\n?/g, "\n");
    normalized = normalized.replace(/\s+([,.;:!?])/g, "$1");
    normalized = normalized.replace(/([,.;:!?])([A-Za-z0-9])/g, "$1 $2");
    let result = "";
    let inDoubleQuote = false;
    for(let index = 0; index < normalized.length; index += 1){
        const char = normalized[index];
        if (char === '"') {
            const prev = normalized[index - 1] ?? "";
            const next = normalized[index + 1] ?? "";
            if (!inDoubleQuote && (!prev || /\s|\(|\[|\{/.test(prev))) {
                result += "“";
                inDoubleQuote = true;
                continue;
            }
            if (inDoubleQuote && (!next || /\s|\)|\]|\}|,|\.|;|:|!|\?/.test(next))) {
                result += "”";
                inDoubleQuote = false;
                continue;
            }
            result += "”";
            inDoubleQuote = false;
            continue;
        }
        if (char === "'") {
            result += "’";
            continue;
        }
        result += char;
    }
    normalized = result;
    normalized = normalized.replace(/[ \t]+\n/g, "\n");
    normalized = normalized.replace(/\n{3,}/g, "\n\n");
    return normalized.trim();
};
function RichTextEditor({ title = "Untitled Article", value, onChange, placeholder = "Begin writing your message…" }) {
    _s();
    const [showTranslationMenu, setShowTranslationMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spellMenu, setSpellMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const importInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordRangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        immediatelyRender: false,
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                heading: {
                    levels: [
                        2,
                        3
                    ]
                },
                link: false,
                underline: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false,
                autolink: true
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                types: [
                    "heading",
                    "paragraph"
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].configure({
                placeholder
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                HTMLAttributes: {
                    class: "article-image"
                }
            })
        ],
        content: value,
        editorProps: {
            attributes: {
                class: "prose prose-lg dark:prose-invert max-w-none focus:outline-none min-h-[400px] font-serif-body leading-relaxed",
                lang: "en",
                spellcheck: "true"
            }
        },
        onUpdate: {
            "RichTextEditor.useEditor[editor]": ({ editor })=>onChange(editor.getHTML())
        }["RichTextEditor.useEditor[editor]"]
    });
    const handleCheckSpelling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[handleCheckSpelling]": ()=>{
            if (!editor) return;
            editor.commands.focus();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Spellcheck is enabled. Right-click a highlighted word to see correction options.");
        }
    }["RichTextEditor.useCallback[handleCheckSpelling]"], [
        editor
    ]);
    const getWordAtPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[getWordAtPoint]": (clientX, clientY)=>{
            const range = document.caretRangeFromPoint(clientX, clientY);
            if (!range || range.startContainer.nodeType !== Node.TEXT_NODE) {
                return null;
            }
            const textNode = range.startContainer;
            const text = textNode.textContent ?? "";
            const offset = range.startOffset;
            let start = offset;
            while(start > 0 && /[A-Za-z]/.test(text[start - 1])){
                start -= 1;
            }
            let end = offset;
            while(end < text.length && /[A-Za-z]/.test(text[end])){
                end += 1;
            }
            const word = text.slice(start, end);
            if (word.length < 2 || !/[A-Za-z]/.test(word)) {
                return null;
            }
            const wordRange = document.createRange();
            wordRange.setStart(textNode, start);
            wordRange.setEnd(textNode, end);
            return {
                word,
                range: wordRange
            };
        }
    }["RichTextEditor.useCallback[getWordAtPoint]"], []);
    const fetchSuggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[fetchSuggestions]": async (word)=>{
            try {
                const response = await fetch(`https://api.datamuse.com/sug?s=${encodeURIComponent(word)}&max=5`);
                if (!response.ok) {
                    return [];
                }
                const data = await response.json();
                return data.map({
                    "RichTextEditor.useCallback[fetchSuggestions]": (item)=>item.word
                }["RichTextEditor.useCallback[fetchSuggestions]"]).filter({
                    "RichTextEditor.useCallback[fetchSuggestions]": (item, index, list)=>Boolean(item) && item.toLowerCase() !== word.toLowerCase() && list.findIndex({
                            "RichTextEditor.useCallback[fetchSuggestions]": (entry)=>entry?.toLowerCase() === item.toLowerCase()
                        }["RichTextEditor.useCallback[fetchSuggestions]"]) === index
                }["RichTextEditor.useCallback[fetchSuggestions]"]).slice(0, 5);
            } catch  {
                return [];
            }
        }
    }["RichTextEditor.useCallback[fetchSuggestions]"], []);
    const applySuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[applySuggestion]": (suggestion)=>{
            if (!wordRangeRef.current) {
                return;
            }
            const selection = window.getSelection();
            if (!selection) {
                return;
            }
            selection.removeAllRanges();
            selection.addRange(wordRangeRef.current);
            document.execCommand("insertText", false, suggestion);
            wordRangeRef.current = null;
            setSpellMenu(null);
            if (editor) {
                editor.commands.focus();
            }
        }
    }["RichTextEditor.useCallback[applySuggestion]"], [
        editor
    ]);
    const handleEditorContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[handleEditorContextMenu]": async (event)=>{
            if (!editor) {
                return;
            }
            const match = getWordAtPoint(event.clientX, event.clientY);
            if (!match) {
                setSpellMenu(null);
                return;
            }
            event.preventDefault();
            wordRangeRef.current = match.range;
            setSpellMenu({
                x: event.clientX,
                y: event.clientY,
                word: match.word,
                suggestions: [],
                loading: true
            });
            const suggestions = await fetchSuggestions(match.word);
            setSpellMenu({
                "RichTextEditor.useCallback[handleEditorContextMenu]": (current)=>{
                    if (!current || current.word !== match.word) {
                        return current;
                    }
                    return {
                        ...current,
                        suggestions,
                        loading: false
                    };
                }
            }["RichTextEditor.useCallback[handleEditorContextMenu]"]);
        }
    }["RichTextEditor.useCallback[handleEditorContextMenu]"], [
        editor,
        fetchSuggestions,
        getWordAtPoint
    ]);
    // Keep the editor in sync if the value is replaced externally
    // (e.g. loading a draft).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichTextEditor.useEffect": ()=>{
            if (editor && value !== editor.getHTML() && !editor.isFocused) {
                editor.commands.setContent(value || "", {
                    emitUpdate: false
                });
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["RichTextEditor.useEffect"], [
        value
    ]);
    // Voice dictation: each finalized phrase from the browser's speech
    // recognition is inserted at the current cursor position.
    const handleDictationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[handleDictationResult]": (text)=>{
            if (!editor) return;
            const trimmed = normalizeArticleText(text);
            if (!trimmed) return;
            const formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
            editor.chain().focus().insertContent(formatted + " ").run();
        }
    }["RichTextEditor.useCallback[handleDictationResult]"], [
        editor
    ]);
    const { mode: dictationMode, isSupported: dictationSupported, isListening, isTranscribing, interimText, error: dictationError, start: startDictation, stop: stopDictation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVoiceDictation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceDictation"])(handleDictationResult);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichTextEditor.useEffect": ()=>{
            if (dictationError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(dictationError);
            }
        }
    }["RichTextEditor.useEffect"], [
        dictationError
    ]);
    if (!editor) return null;
    const formatTextAsEditorHtml = (text)=>{
        const cleanedText = normalizeArticleText(text);
        const escapeHtml = (value)=>value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
        const lines = cleanedText.split("\n");
        const html = [];
        let listType = null;
        const closeList = ()=>{
            if (listType) html.push(`</${listType}>`);
            listType = null;
        };
        for (const line of lines){
            const trimmed = line.trim();
            const unordered = trimmed.match(/^[-*+]\s+(.+)$/);
            const ordered = trimmed.match(/^\d+[.)]\s+(.+)$/);
            if (!trimmed) {
                closeList();
                continue;
            }
            if (unordered || ordered) {
                const nextListType = unordered ? "ul" : "ol";
                if (listType !== nextListType) {
                    closeList();
                    html.push(`<${nextListType}>`);
                    listType = nextListType;
                }
                html.push(`<li>${escapeHtml((unordered ?? ordered)?.[1] ?? "")}</li>`);
                continue;
            }
            closeList();
            const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
            if (heading) {
                const level = Math.min(heading[1].length + 1, 3);
                html.push(`<h${level}>${escapeHtml(heading[2])}</h${level}>`);
            } else {
                html.push(`<p>${escapeHtml(trimmed)}</p>`);
            }
        }
        closeList();
        return html.join("");
    };
    const setLink = ()=>{
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("Link URL", previousUrl || "https://");
        if (url === null) return;
        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange("link").setLink({
            href: url
        }).run();
    };
    const sanitizeTranslatedHtml = (value)=>{
        if (!value) return "";
        return value.replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>\s*<p[^>]*>/gi, "\n\n").replace(/<\/div>\s*<div[^>]*>/gi, "\n\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/\u00a0/g, " ").replace(/\n{3,}/g, "\n\n").trim();
    };
    const handleTranslateSelection = async (targetLanguage)=>{
        const text = editor.getText().trim();
        if (!text) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Add some article content before translating.");
            setShowTranslationMenu(false);
            return;
        }
        try {
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/translate/text"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    text,
                    title: title || "Article",
                    articleTitle: title || "Article",
                    targetLanguage,
                    language: targetLanguage
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || data?.message || "Translation failed");
            }
            const translatedText = data?.translatedText ?? data?.data?.translatedText ?? data?.translation?.translatedText ?? data?.text ?? "";
            if (!translatedText) {
                throw new Error("Translation response was empty.");
            }
            const safeTranslatedText = sanitizeTranslatedHtml(translatedText);
            editor.chain().focus().insertContent(`\n\n<p><strong>Translation (${targetLanguage})</strong></p><p>${safeTranslatedText}</p>\n\n`).run();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Translation inserted into the article.");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Translation failed. Try again.");
        } finally{
            setShowTranslationMenu(false);
        }
    };
    const exportWordDocument = ()=>{
        const escapeHtml = (text)=>text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safeTitle = escapeHtml(title.trim() || "Untitled Article");
        const htmlContent = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${safeTitle}</title><style>body{font-family:Arial,sans-serif;color:#222;line-height:1.6;margin:40px}h1{font-size:26pt;margin-bottom:8px}h2,h3{margin-top:20px}p{margin:10px 0}blockquote{border-left:4px solid #999;margin:16px 0;padding-left:16px;color:#555}img{max-width:100%;height:auto}ul,ol{margin:10px 0 10px 24px}.metadata{color:#666;font-size:10pt;border-bottom:1px solid #ccc;padding-bottom:12px;margin-bottom:24px}</style></head><body><h1>${safeTitle}</h1><p class="metadata">Prepared on ${new Date().toLocaleDateString()}</p><div>${editor.getHTML()}</div></body></html>`;
        const blob = new Blob([
            htmlContent
        ], {
            type: "application/msword"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${(title.trim() || "untitled-article").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.doc`;
        link.click();
        URL.revokeObjectURL(url);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Word document downloaded.");
    };
    const importDocument = async (file)=>{
        try {
            const extension = file.name.split(".").pop()?.toLowerCase();
            let text;
            if (extension === "docx") {
                const mammoth = await __turbopack_context__.A("[project]/node_modules/mammoth/lib/index.js [app-client] (ecmascript, async loader)");
                const result = await mammoth.extractRawText({
                    arrayBuffer: await file.arrayBuffer()
                });
                text = result.value;
            } else if (extension === "pdf") {
                const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-client] (ecmascript, async loader)");
                const document1 = await pdfjs.getDocument({
                    data: await file.arrayBuffer(),
                    disableWorker: true
                }).promise;
                const pages = [];
                for(let pageNumber = 1; pageNumber <= document1.numPages; pageNumber += 1){
                    const page = await document1.getPage(pageNumber);
                    const textContent = await page.getTextContent();
                    pages.push(textContent.items.map((item)=>"str" in item ? item.str : "").join(" "));
                }
                text = pages.join("\n\n");
                document1.cleanup();
            } else if (extension === "txt" || extension === "md" || extension === "markdown") {
                text = await file.text();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Choose a Microsoft Word (.docx) or PDF (.pdf) file.");
                return;
            }
            editor.commands.setContent(formatTextAsEditorHtml(text), {
                emitUpdate: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Document imported into the article.");
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Could not read that document.");
        } finally{
            if (importInputRef.current) importInputRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-xl border border-parchment-300 bg-white shadow-sm dark:border-ink-700 dark:bg-ink-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-nowrap items-center gap-0.5 overflow-x-auto border-b border-parchment-200 bg-parchment-50 px-2 py-1.5 dark:border-ink-800 dark:bg-ink-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Bold",
                        active: editor.isActive("bold"),
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Italic",
                        active: editor.isActive("italic"),
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Underline",
                        active: editor.isActive("underline"),
                        onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 611,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Heading",
                        active: editor.isActive("heading", {
                            level: 2
                        }),
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 2
                            }).run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__["Heading2"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Subheading",
                        active: editor.isActive("heading", {
                            level: 3
                        }),
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 3
                            }).run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__["Heading3"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 638,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 631,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Bullet list",
                        active: editor.isActive("bulletList"),
                        onClick: ()=>editor.chain().focus().toggleBulletList().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 648,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Numbered list",
                        active: editor.isActive("orderedList"),
                        onClick: ()=>editor.chain().focus().toggleOrderedList().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Align left",
                        active: editor.isActive({
                            textAlign: "left"
                        }),
                        onClick: ()=>editor.chain().focus().setTextAlign("left").run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Align center",
                        active: editor.isActive({
                            textAlign: "center"
                        }),
                        onClick: ()=>editor.chain().focus().setTextAlign("center").run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 671,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Align right",
                        active: editor.isActive({
                            textAlign: "right"
                        }),
                        onClick: ()=>editor.chain().focus().setTextAlign("right").run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 688,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 681,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Link",
                        active: editor.isActive("link"),
                        onClick: setLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 698,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Divider",
                        onClick: ()=>editor.chain().focus().setHorizontalRule().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 705,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 701,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 708,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Undo",
                        onClick: ()=>editor.chain().focus().undo().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 710,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                        label: "Redo",
                        onClick: ()=>editor.chain().focus().redo().run(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                            lineNumber: 721,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 717,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center",
                        children: [
                            dictationSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                        lineNumber: 727,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                        label: isListening ? "Stop voice dictation" : dictationMode === "cloud" ? "Start voice dictation (cloud)" : "Start voice dictation",
                                        active: isListening,
                                        onClick: ()=>isListening ? stopDictation() : startDictation(),
                                        children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            size: 17,
                                            className: "text-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                            lineNumber: 743,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                            lineNumber: 745,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                        lineNumber: 729,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 726,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-1 h-5 w-px bg-parchment-300 dark:bg-ink-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                        label: "Translate article",
                                        onClick: ()=>setShowTranslationMenu((current)=>!current),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                            lineNumber: 758,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                        lineNumber: 754,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                label: "Format and download as Word document",
                                onClick: exportWordDocument,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                    lineNumber: 766,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 762,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolbarButton, {
                                label: "Import Word or PDF document",
                                onClick: ()=>importInputRef.current?.click(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                    lineNumber: 773,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: importInputRef,
                                type: "file",
                                accept: ".docx,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf",
                                className: "hidden",
                                onChange: (event)=>{
                                    const file = event.target.files?.[0];
                                    if (file) void importDocument(file);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 776,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 border-b border-parchment-200 bg-parchment-50 px-4 py-2 text-xs text-ink-600 dark:border-ink-800 dark:bg-ink-950 dark:text-parchment-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Spellcheck is enabled. Right-click a highlighted word to see correction options."
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 790,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCheckSpelling,
                        className: "rounded-md border border-parchment-300 bg-white px-2.5 py-1 font-medium text-ink-700 transition hover:bg-parchment-100 dark:border-ink-700 dark:bg-ink-900 dark:text-parchment-200 dark:hover:bg-ink-800",
                        children: "Check spelling"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 795,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this),
            showTranslationMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-2 top-12 z-30 w-44 rounded-xl border border-parchment-300 bg-white p-2 shadow-lg dark:border-ink-700 dark:bg-ink-900",
                children: languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleTranslateSelection(language.code),
                        className: "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-ink-700 transition hover:bg-parchment-100 dark:text-parchment-200 dark:hover:bg-ink-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 813,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] uppercase tracking-wide text-ink-400 dark:text-parchment-500",
                                children: language.code
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 815,
                                columnNumber: 15
                            }, this)
                        ]
                    }, language.code, true, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 807,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                lineNumber: 805,
                columnNumber: 9
            }, this),
            isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 border-b border-parchment-200 bg-red-50 px-4 py-1.5 text-xs text-ink-500 dark:border-ink-800 dark:bg-red-950/20 dark:text-parchment-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-red-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 825,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 font-medium text-red-600 dark:text-red-400",
                        children: dictationMode === "cloud" && isTranscribing ? "Transcribing…" : "Listening…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 827,
                        columnNumber: 11
                    }, this),
                    interimText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate italic",
                        children: interimText
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 834,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                lineNumber: 824,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 sm:px-8 sm:py-6",
                onContextMenu: handleEditorContextMenu,
                onPaste: (event)=>{
                    const pastedText = event.clipboardData?.getData("text/plain")?.trim();
                    if (!pastedText) return;
                    event.preventDefault();
                    editor.commands.focus();
                    editor.commands.insertContent(formatTextAsEditorHtml(pastedText));
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                    editor: editor
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                    lineNumber: 852,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this),
            spellMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 min-w-56 rounded-xl border border-parchment-300 bg-white p-2 shadow-xl dark:border-ink-700 dark:bg-ink-900",
                style: {
                    left: spellMenu.x + 12,
                    top: spellMenu.y + 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-500 dark:text-parchment-400",
                        children: "Correct word"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 863,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 rounded-lg bg-parchment-100 px-2 py-1 text-sm text-ink-700 dark:bg-ink-800 dark:text-parchment-200",
                        children: spellMenu.word
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 867,
                        columnNumber: 11
                    }, this),
                    spellMenu.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1 text-sm text-ink-500 dark:text-parchment-400",
                        children: "Loading suggestions…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 872,
                        columnNumber: 13
                    }, this) : spellMenu.suggestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: spellMenu.suggestions.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>applySuggestion(suggestion),
                                className: "flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm text-ink-700 transition hover:bg-parchment-100 dark:text-parchment-200 dark:hover:bg-ink-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: suggestion
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                    lineNumber: 884,
                                    columnNumber: 19
                                }, this)
                            }, suggestion, false, {
                                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                                lineNumber: 878,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 876,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1 text-sm text-ink-500 dark:text-parchment-400",
                        children: "No suggestions found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                        lineNumber: 889,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/RichTextEditor.tsx",
                lineNumber: 856,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/RichTextEditor.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
}
_s(RichTextEditor, "dkKuT3fA6vVw61vo/falN1h984Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVoiceDictation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceDictation"]
    ];
});
_c1 = RichTextEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToolbarButton");
__turbopack_context__.k.register(_c1, "RichTextEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/RichTextEditor.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/editor/RichTextEditor.tsx [app-client] (ecmascript)"));
}),
"[project]/src/hooks/useCloudDictation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCloudDictation",
    ()=>useCloudDictation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * MediaRecorder produces a properly-decodable audio file only once you call
 * .stop() — a single long recording's early ondataavailable chunks usually
 * aren't independently valid audio for most codecs. So instead of one
 * continuous recording, this records in short, complete, non-overlapping
 * segments (stop → get a real file → transcribe → start the next segment),
 * which is the standard technique for feeding a batch (non-streaming)
 * transcription API and keeps things feeling close to continuous.
 */ const CHUNK_DURATION_MS = 6000;
// Skip uploading essentially-silent chunks — saves API calls/cost and avoids
// the model hallucinating text from near-empty audio.
const MIN_CHUNK_BYTES = 4000;
function pickSupportedMimeType() {
    if (typeof MediaRecorder === "undefined" || !MediaRecorder.isTypeSupported) return undefined;
    const candidates = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
    ];
    return candidates.find((type)=>MediaRecorder.isTypeSupported(type));
}
function extensionFor(mimeType) {
    if (mimeType.includes("mp4")) return "mp4";
    if (mimeType.includes("ogg")) return "ogg";
    return "webm";
}
function useCloudDictation(onFinalResult) {
    _s();
    const [isSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCloudDictation.useState": ()=>typeof navigator !== "undefined" && Boolean(navigator.mediaDevices?.getUserMedia) && typeof MediaRecorder !== "undefined"
    }["useCloudDictation.useState"]);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTranscribing, setIsTranscribing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldContinueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onFinalResultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFinalResult);
    onFinalResultRef.current = onFinalResult;
    const uploadChunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCloudDictation.useCallback[uploadChunk]": async (blob)=>{
            if (blob.size < MIN_CHUNK_BYTES) return;
            setIsTranscribing(true);
            try {
                const formData = new FormData();
                formData.append("audio", blob, `chunk.${extensionFor(blob.type)}`);
                const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrl"])("/api/admin/transcribe"), {
                    method: "POST",
                    credentials: "include",
                    body: formData
                });
                const data = await res.json().catch({
                    "useCloudDictation.useCallback[uploadChunk]": ()=>({})
                }["useCloudDictation.useCallback[uploadChunk]"]);
                if (!res.ok) {
                    setError(data.error || "Voice dictation couldn't reach the transcription service.");
                    return;
                }
                const text = typeof data.text === "string" ? data.text.trim() : "";
                if (text) onFinalResultRef.current(text);
            } catch  {
                setError("Voice dictation lost its connection. Please try again.");
            } finally{
                setIsTranscribing(false);
            }
        }
    }["useCloudDictation.useCallback[uploadChunk]"], []);
    const recordNextChunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCloudDictation.useCallback[recordNextChunk]": ()=>{
            const stream = streamRef.current;
            if (!stream || !shouldContinueRef.current) return;
            const mimeType = pickSupportedMimeType();
            const recorder = mimeType ? new MediaRecorder(stream, {
                mimeType
            }) : new MediaRecorder(stream);
            const localParts = [];
            recorder.ondataavailable = ({
                "useCloudDictation.useCallback[recordNextChunk]": (e)=>{
                    if (e.data.size > 0) localParts.push(e.data);
                }
            })["useCloudDictation.useCallback[recordNextChunk]"];
            recorder.onstop = ({
                "useCloudDictation.useCallback[recordNextChunk]": async ()=>{
                    const blob = new Blob(localParts, {
                        type: recorder.mimeType || "audio/webm"
                    });
                    // Uploads are awaited before starting the next chunk, trading a small
                    // pause between phrases for guaranteed in-order transcription.
                    await uploadChunk(blob);
                    if (shouldContinueRef.current) recordNextChunk();
                }
            })["useCloudDictation.useCallback[recordNextChunk]"];
            recorderRef.current = recorder;
            recorder.start();
            setTimeout({
                "useCloudDictation.useCallback[recordNextChunk]": ()=>{
                    if (recorder.state !== "inactive") recorder.stop();
                }
            }["useCloudDictation.useCallback[recordNextChunk]"], CHUNK_DURATION_MS);
        }
    }["useCloudDictation.useCallback[recordNextChunk]"], [
        uploadChunk
    ]);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCloudDictation.useCallback[start]": async ()=>{
            if (!isSupported) return;
            setError(null);
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                streamRef.current = stream;
                shouldContinueRef.current = true;
                setIsListening(true);
                recordNextChunk();
            } catch  {
                setError("Microphone access was denied. Check your browser's site permissions and try again.");
            }
        }
    }["useCloudDictation.useCallback[start]"], [
        isSupported,
        recordNextChunk
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCloudDictation.useCallback[stop]": ()=>{
            shouldContinueRef.current = false;
            if (recorderRef.current && recorderRef.current.state !== "inactive") {
                recorderRef.current.stop();
            }
            streamRef.current?.getTracks().forEach({
                "useCloudDictation.useCallback[stop]": (t)=>t.stop()
            }["useCloudDictation.useCallback[stop]"]);
            streamRef.current = null;
            setIsListening(false);
        }
    }["useCloudDictation.useCallback[stop]"], []);
    return {
        isSupported,
        isListening,
        isTranscribing,
        error,
        start,
        stop
    };
}
_s(useCloudDictation, "fUu2NQkMukqt5kINg2Q/2vvJb84=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSpeechToText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeechToText",
    ()=>useSpeechToText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function getSpeechRecognitionCtor() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const w = window;
    return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}
function useSpeechToText(onFinalResult) {
    _s();
    const [isSupported, setIsSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [interimText, setInterimText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shouldRestartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onFinalResultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFinalResult);
    onFinalResultRef.current = onFinalResult;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSpeechToText.useEffect": ()=>{
            setIsSupported(getSpeechRecognitionCtor() !== null);
        }
    }["useSpeechToText.useEffect"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeechToText.useCallback[start]": ()=>{
            const Ctor = getSpeechRecognitionCtor();
            if (!Ctor) return;
            setError(null);
            const recognition = new Ctor();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = "en-US";
            recognition.onresult = ({
                "useSpeechToText.useCallback[start]": (event)=>{
                    let interim = "";
                    for(let i = event.resultIndex; i < event.results.length; i++){
                        const result = event.results[i];
                        const transcript = result[0].transcript;
                        if (result.isFinal) {
                            onFinalResultRef.current(transcript);
                        } else {
                            interim += transcript;
                        }
                    }
                    setInterimText(interim);
                }
            })["useSpeechToText.useCallback[start]"];
            recognition.onerror = ({
                "useSpeechToText.useCallback[start]": (event)=>{
                    // "no-speech" fires constantly during natural pauses — not a real error.
                    if (event.error === "no-speech" || event.error === "aborted") return;
                    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
                        setError("Microphone access was denied. Check your browser's site permissions and try again.");
                        shouldRestartRef.current = false;
                    } else {
                        setError("Voice dictation ran into a problem and stopped. Please try again.");
                        shouldRestartRef.current = false;
                    }
                }
            })["useSpeechToText.useCallback[start]"];
            recognition.onend = ({
                "useSpeechToText.useCallback[start]": ()=>{
                    setInterimText("");
                    if (shouldRestartRef.current) {
                        // Browsers silently end recognition after a few seconds of silence
                        // even in "continuous" mode — restart seamlessly so it feels like
                        // one continuous dictation session to the person using it.
                        try {
                            recognition.start();
                        } catch  {
                            setIsListening(false);
                        }
                    } else {
                        setIsListening(false);
                    }
                }
            })["useSpeechToText.useCallback[start]"];
            shouldRestartRef.current = true;
            recognitionRef.current = recognition;
            recognition.start();
            setIsListening(true);
        }
    }["useSpeechToText.useCallback[start]"], []);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeechToText.useCallback[stop]": ()=>{
            shouldRestartRef.current = false;
            recognitionRef.current?.stop();
            setIsListening(false);
            setInterimText("");
        }
    }["useSpeechToText.useCallback[stop]"], []);
    // Always stop the microphone if the component unmounts mid-dictation.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSpeechToText.useEffect": ()=>{
            return ({
                "useSpeechToText.useEffect": ()=>{
                    shouldRestartRef.current = false;
                    recognitionRef.current?.stop();
                }
            })["useSpeechToText.useEffect"];
        }
    }["useSpeechToText.useEffect"], []);
    return {
        isSupported,
        isListening,
        interimText,
        error,
        start,
        stop
    };
}
_s(useSpeechToText, "e4qIFf00Dyg/mv+BAvxis8hcJ/c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useVoiceDictation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceDictation",
    ()=>useVoiceDictation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSpeechToText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCloudDictation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCloudDictation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useVoiceDictation(onFinalResult) {
    _s();
    const browser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechToText"])(onFinalResult);
    const cloud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCloudDictation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloudDictation"])(onFinalResult);
    const usingCloud = !browser.isSupported && cloud.isSupported;
    const mode = browser.isSupported ? "browser" : cloud.isSupported ? "cloud" : "unsupported";
    return {
        mode,
        isSupported: mode !== "unsupported",
        isListening: usingCloud ? cloud.isListening : browser.isListening,
        isTranscribing: usingCloud ? cloud.isTranscribing : false,
        interimText: usingCloud ? "" : browser.interimText,
        error: usingCloud ? cloud.error : browser.error,
        start: usingCloud ? cloud.start : browser.start,
        stop: usingCloud ? cloud.stop : browser.stop
    };
}
_s(useVoiceDictation, "KitWeT6E5Kxvb6dNxs1qvvqMRUQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSpeechToText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeechToText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCloudDictation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloudDictation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1fy-yaj._.js.map