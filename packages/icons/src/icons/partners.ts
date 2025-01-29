import createSupabaseIcon from '../createSupabaseIcon';

/**
 * @component @name Partners
 * @description Supabase SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAxNiAxNiIKICBmaWxsPSJub25lIgogIHN0cm9rZT0ibm9uZSIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aAogICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTYuNzQ0MjggMy4xNDY2M0M1LjQ2MjIyIDEuODY0NTggMy4zODM2IDEuODY0NTggMi4xMDE1NCAzLjE0NjYzQzAuODE5NTg0IDQuNDI4NTkgMC44MTk0ODQgNi41MDY5OSAyLjEwMTI0IDcuNzg5MDdMMi4yNzE0OSA3Ljk1OTA3TDcuMTQ1MzcgMTIuODcxM0w3LjE0Njk0IDEyLjg3MjlMNy44NzYzNCAxMy42MDIzQzguMTU5ODYgMTMuODg1OCA4LjYxOTU1IDEzLjg4NTggOC45MDMwNyAxMy42MDIzQzkuMTU3NDUgMTMuMzQ3OSA5LjE2OTE1IDEyLjg2ODIgOC44ODY5NyAxMi41NjA0TDguMDM1ODQgMTEuNzA5MkM3LjgxMzI4IDExLjQ4NjYgNy44MTMzMSAxMS4xMjU3IDguMDM1OSAxMC45MDMyQzguMjU4NDkgMTAuNjgwNiA4LjYxOTM2IDEwLjY4MDYgOC44NDE5MSAxMC45MDMyTDkuMjI4NDEgMTEuMjg5OEM5LjIzNjA2IDExLjI5NjcgOS4yNDM1NyAxMS4zMDM4IDkuMjUwOTMgMTEuMzExMUw5LjcwOTIzIDExLjc2OTdMOS43MTIyNCAxMS43NzI3TDkuNzE0NyAxMS43NzUyTDkuNzE2OTIgMTEuNzc3NEw5LjcyMTE0IDExLjc4MThMOS43MjUyNSAxMS43ODYyTDkuNzMwNTkgMTEuNzkyTDkuOTY4NjQgMTIuMDMwMUMxMC4yNTIxIDEyLjMxMzcgMTAuNzExOCAxMi4zMTM3IDEwLjk5NTMgMTIuMDMwMkMxMS4yNzg4IDExLjc0NjcgMTEuMjc4OCAxMS4yODcxIDEwLjk5NTQgMTEuMDAzNkw5LjgyOTY5IDkuODM3NzJDOS42MDcxMyA5LjYxNTEzIDkuNjA3MTYgOS4yNTQyNiA5LjgyOTc1IDkuMDMxNzFDOS45NTAwNSA4LjkxMTQyIDEwLjExMDcgOC44NTYxNSAxMC4yNjgyIDguODY1OUMxMC40MDgxIDguODcwMTkgMTAuNTQ2OCA4LjkyNTc1IDEwLjY1MzYgOS4wMzI1NkwxMS44MzkxIDEwLjIxODFDMTIuMTIyNiAxMC41MDE2IDEyLjU4MjMgMTAuNTAxNiAxMi44NjU4IDEwLjIxODFDMTMuMTQ5MyA5LjkzNDYyIDEzLjE0OTMgOS40NzQ5OCAxMi44NjU4IDkuMTkxNDhMMTEuNjYxNSA3Ljk4NzI0QzExLjQzOSA3Ljc2NDY2IDExLjQzOSA3LjQwMzggMTEuNjYxNSA3LjE4MTIyQzExLjg4NDEgNi45NTg2NSAxMi4yNDUgNi45NTg2NSAxMi40Njc2IDcuMTgxMjJMMTMuNDg3MiA4LjIwMDlMMTMuODk4NyA3Ljc4OTQyQzE1LjE4MDggNi41MDczNyAxNS4xODA4IDQuNDI4NzQgMTMuODk4NyAzLjE0NjY4QzEyLjYxNjYgMS44NjQ2MyAxMC41MzggMS44NjQ2MyA5LjI1NTk2IDMuMTQ2NjhMNy44ODUxOCA0LjUxNzQ3TDcuMjUxMjIgNS4xNTEzOEM3LjI1MTIyIDUuMTUxMzggNy4yNTEyMyA1LjE1MTM3IDcuMjUxMjIgNS4xNTEzOEM2Ljc3ODYyIDUuNjI0IDYuNzc4NjEgNi4zOTAyNyA3LjI1MTIyIDYuODYyODhDNy43MjM4NCA3LjMzNTUgOC40OTAxIDcuMzM1NSA4Ljk2MjcyIDYuODYyODhMMTEuMDQ5MSA0Ljc3NjQ4QzExLjI3MTcgNC41NTM5IDExLjYzMjYgNC41NTM5IDExLjg1NTEgNC43NzY0OEMxMi4wNzc3IDQuOTk5MDUgMTIuMDc3NyA1LjM1OTkyIDExLjg1NTEgNS41ODI0OUw5Ljc2ODc0IDcuNjY4OUM4Ljg1MDk3IDguNTg2NjYgNy4zNjI5OCA4LjU4NjY2IDYuNDQ1MjEgNy42Njg5QzUuNTI3NDQgNi43NTExMyA1LjUyNzQ0IDUuMjYzMTMgNi40NDUyMSA0LjM0NTM2TDcuMDc5MTYgMy43MTE0Nkw3LjE5NDEzIDMuNTk2NDhMNi43NDQyOCAzLjE0NjYzWk04LjAwMDE0IDIuNzkwNDdMNy41NTAyOSAyLjM0MDYyQzUuODIzMDkgMC42MTM0MTMgMy4wMjI3MyAwLjYxMzQxNSAxLjI5NTUzIDIuMzQwNjJDLTAuNDMxNjc5IDQuMDY3ODMgLTAuNDMxNjc5IDYuODY4MTggMS4yOTU1MyA4LjU5NTM5TDEuNDYyMzIgOC43NjE5M0wxLjQ2NDIgOC43NjM4MUw2LjMzNzc3IDEzLjY3NTdMNi4zMzkzNCAxMy42NzczTDcuMDcwMzIgMTQuNDA4M0M3Ljc5OSAxNS4xMzcgOC45ODA0MSAxNS4xMzcgOS43MDkwOSAxNC40MDgzQzEwLjAwNDIgMTQuMTEzMSAxMC4xNzAxIDEzLjc0NSAxMC4yMiAxMy4zNjQzQzEwLjc4MDYgMTMuNDQzMyAxMS4zNzAyIDEzLjI2NzMgMTEuODAxMyAxMi44MzYyQzEyLjE1MiAxMi40ODU1IDEyLjMzMzkgMTIuMDMgMTIuMzQ3MSAxMS41NzA2QzEyLjgyNjQgMTEuNTcyIDEzLjMwNjEgMTEuMzg5OCAxMy42NzE4IDExLjAyNDFDMTQuMTc1OCAxMC41MjAyIDE0LjMzMTIgOS43OTk2NiAxNC4xMzggOS4xNjIxNEwxNC43MDQ3IDguNTk1NDRDMTYuNDMxOSA2Ljg2ODIzIDE2LjQzMTkgNC4wNjc4OCAxNC43MDQ3IDIuMzQwNjdDMTIuOTc3NSAwLjYxMzQ2NSAxMC4xNzcyIDAuNjEzNDY0IDguNDQ5OTQgMi4zNDA2N0w4LjAwMDE0IDIuNzkwNDdaIgogICAgZmlsbD0iY3VycmVudENvbG9yIgogIC8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Supabase icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Partners = createSupabaseIcon('Partners', [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M6.74428 3.14663C5.46222 1.86458 3.3836 1.86458 2.10154 3.14663C0.819584 4.42859 0.819484 6.50699 2.10124 7.78907L2.27149 7.95907L7.14537 12.8713L7.14694 12.8729L7.87634 13.6023C8.15986 13.8858 8.61955 13.8858 8.90307 13.6023C9.15745 13.3479 9.16915 12.8682 8.88697 12.5604L8.03584 11.7092C7.81328 11.4866 7.81331 11.1257 8.0359 10.9032C8.25849 10.6806 8.61936 10.6806 8.84191 10.9032L9.22841 11.2898C9.23606 11.2967 9.24357 11.3038 9.25093 11.3111L9.70923 11.7697L9.71224 11.7727L9.7147 11.7752L9.71692 11.7774L9.72114 11.7818L9.72525 11.7862L9.73059 11.792L9.96864 12.0301C10.2521 12.3137 10.7118 12.3137 10.9953 12.0302C11.2788 11.7467 11.2788 11.2871 10.9954 11.0036L9.82969 9.83772C9.60713 9.61513 9.60716 9.25426 9.82975 9.03171C9.95005 8.91142 10.1107 8.85615 10.2682 8.8659C10.4081 8.87019 10.5468 8.92575 10.6536 9.03256L11.8391 10.2181C12.1226 10.5016 12.5823 10.5016 12.8658 10.2181C13.1493 9.93462 13.1493 9.47498 12.8658 9.19148L11.6615 7.98724C11.439 7.76466 11.439 7.4038 11.6615 7.18122C11.8841 6.95865 12.245 6.95865 12.4676 7.18122L13.4872 8.2009L13.8987 7.78942C15.1808 6.50737 15.1808 4.42874 13.8987 3.14668C12.6166 1.86463 10.538 1.86463 9.25596 3.14668L7.88518 4.51747L7.25122 5.15138C7.25122 5.15138 7.25123 5.15137 7.25122 5.15138C6.77862 5.624 6.77861 6.39027 7.25122 6.86288C7.72384 7.3355 8.4901 7.3355 8.96272 6.86288L11.0491 4.77648C11.2717 4.5539 11.6326 4.5539 11.8551 4.77648C12.0777 4.99905 12.0777 5.35992 11.8551 5.58249L9.76874 7.6689C8.85097 8.58666 7.36298 8.58666 6.44521 7.6689C5.52744 6.75113 5.52744 5.26313 6.44521 4.34536L7.07916 3.71146L7.19413 3.59648L6.74428 3.14663ZM8.00014 2.79047L7.55029 2.34062C5.82309 0.613413 3.02273 0.613415 1.29553 2.34062C-0.431679 4.06783 -0.431679 6.86818 1.29553 8.59539L1.46232 8.76193L1.4642 8.76381L6.33777 13.6757L6.33934 13.6773L7.07032 14.4083C7.799 15.137 8.98041 15.137 9.70909 14.4083C10.0042 14.1131 10.1701 13.745 10.22 13.3643C10.7806 13.4433 11.3702 13.2673 11.8013 12.8362C12.152 12.4855 12.3339 12.03 12.3471 11.5706C12.8264 11.572 13.3061 11.3898 13.6718 11.0241C14.1758 10.5202 14.3312 9.79966 14.138 9.16214L14.7047 8.59544C16.4319 6.86823 16.4319 4.06788 14.7047 2.34067C12.9775 0.613465 10.1772 0.613464 8.44994 2.34067L8.00014 2.79047Z',
      fill: 'currentColor',
      key: '2i9zea',
    },
  ],
]);

export default Partners;
