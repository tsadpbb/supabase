import createSupabaseIcon from '../createSupabaseIcon';

/**
 * @component @name Briefcase
 * @description Supabase SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAxNiAxNiIKICBmaWxsPSJub25lIgogIHN0cm9rZT0ibm9uZSIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aAogICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTUuOTY5NjcgMi43ODk0QzUuOTY5NjcgMS44NDA3MSA2LjczODczIDEuMDcxNjQgNy42ODc0MyAxLjA3MTY0SDguMjYwMDFDOS4yMDg3MSAxLjA3MTY0IDkuOTc3NzcgMS44NDA3MSA5Ljk3Nzc3IDIuNzg5NFYzLjM2MTk5SDEzLjQ4ODFDMTQuODc1NCAzLjM2MTk5IDE2IDQuNDg2NTkgMTYgNS44NzM4NUMxNiA2LjQyNjA4IDE1LjgxOSA2Ljk1MDMxIDE1LjUwMTIgNy4zNzYxOFYxMi4wNjU0QzE1LjUwMTIgMTMuNjQ2NiAxNC4yMTk0IDE0LjkyODQgMTIuNjM4MyAxNC45Mjg0SDMuMzYxNzFDMS43ODA1NiAxNC45Mjg0IDAuNDk4Nzc3IDEzLjY0NjYgMC40OTg3NzcgMTIuMDY1NFY3LjM3NjE4QzAuMTgxMDMzIDYuOTUwMzEgMCA2LjQyNjA4IDAgNS44NzM4NUMwIDQuNDg2NTkgMS4xMjQ2IDMuMzYxOTkgMi41MTE4NiAzLjM2MTk5SDUuOTY5NjdWMi43ODk0Wk0yLjUxMTg2IDQuNTA3MTZDMS43NTcwNiA0LjUwNzE2IDEuMTQ1MTcgNS4xMTkwNSAxLjE0NTE3IDUuODczODVDMS4xNDUxNyA2LjM5OTk4IDEuNDQ3MTkgNi44Nzk0IDEuOTIxNzUgNy4xMDY1N0w1LjE3MTA5IDguNjYyMDVDNS40NTYzMyA4Ljc5ODU5IDUuNTc2ODYgOS4xNDA1MSA1LjQ0MDMyIDkuNDI1NzRDNS4zMDM3OCA5LjcxMDk4IDQuOTYxODYgOS44MzE1MiA0LjY3NjYzIDkuNjk0OTdMMS42NDM5NSA4LjI0MzIxVjEyLjA2NTRDMS42NDM5NSAxMy4wMTQxIDIuNDEzMDIgMTMuNzgzMiAzLjM2MTcxIDEzLjc4MzJIMTIuNjM4M0MxMy41ODcgMTMuNzgzMiAxNC4zNTYgMTMuMDE0MSAxNC4zNTYgMTIuMDY1NFY4LjI0MzIxTDExLjMyMzQgOS42OTQ5N0MxMS4wMzgxIDkuODMxNTIgMTAuNjk2MiA5LjcxMDk4IDEwLjU1OTcgOS40MjU3NEMxMC40MjMxIDkuMTQwNTEgMTAuNTQzNyA4Ljc5ODU5IDEwLjgyODkgOC42NjIwNUwxNC4wNzgzIDcuMTA2NTdDMTQuNTUyOCA2Ljg3OTQgMTQuODU0OCA2LjM5OTk4IDE0Ljg1NDggNS44NzM4NUMxNC44NTQ4IDUuMTE5MDUgMTQuMjQyOSA0LjUwNzE2IDEzLjQ4ODEgNC41MDcxNkgyLjUxMTg2Wk04LjgzMjYgMy4zNjE5OUg3LjExNDg0VjIuNzg5NEM3LjExNDg0IDIuNDczMTcgNy4zNzExOSAyLjIxNjgyIDcuNjg3NDMgMi4yMTY4Mkg4LjI2MDAxQzguNTc2MjQgMi4yMTY4MiA4LjgzMjYgMi40NzMxNyA4LjgzMjYgMi43ODk0VjMuMzYxOTlaTTcuNjg3NDMgOS4wMDU5NEM3LjM3MTE5IDkuMDA1OTQgNy4xMTQ4NCA5LjI2MjMgNy4xMTQ4NCA5LjU3ODUzVjEwLjE1MTFDNy4xMTQ4NCAxMC40NjczIDcuMzcxMTkgMTAuNzIzNyA3LjY4NzQzIDEwLjcyMzdIOC4yNjAwMUM4LjU3NjI0IDEwLjcyMzcgOC44MzI2IDEwLjQ2NzMgOC44MzI2IDEwLjE1MTFWOS41Nzg1M0M4LjgzMjYgOS4yNjIzIDguNTc2MjQgOS4wMDU5NCA4LjI2MDAxIDkuMDA1OTRINy42ODc0M1pNNS45Njk2NyA5LjU3ODUzQzUuOTY5NjcgOC42Mjk4NCA2LjczODczIDcuODYwNzcgNy42ODc0MyA3Ljg2MDc3SDguMjYwMDFDOS4yMDg3MSA3Ljg2MDc3IDkuOTc3NzcgOC42Mjk4NCA5Ljk3Nzc3IDkuNTc4NTNWMTAuMTUxMUM5Ljk3Nzc3IDExLjA5OTggOS4yMDg3MSAxMS44Njg5IDguMjYwMDEgMTEuODY4OUg3LjY4NzQzQzYuNzM4NzMgMTEuODY4OSA1Ljk2OTY3IDExLjA5OTggNS45Njk2NyAxMC4xNTExVjkuNTc4NTNaIgogICAgZmlsbD0iY3VycmVudENvbG9yIgogIC8+Cjwvc3ZnPg==)
 *
 * @param {Object} props - Supabase icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Briefcase = createSupabaseIcon('Briefcase', [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M5.96967 2.7894C5.96967 1.84071 6.73873 1.07164 7.68743 1.07164H8.26001C9.20871 1.07164 9.97777 1.84071 9.97777 2.7894V3.36199H13.4881C14.8754 3.36199 16 4.48659 16 5.87385C16 6.42608 15.819 6.95031 15.5012 7.37618V12.0654C15.5012 13.6466 14.2194 14.9284 12.6383 14.9284H3.36171C1.78056 14.9284 0.498777 13.6466 0.498777 12.0654V7.37618C0.181033 6.95031 0 6.42608 0 5.87385C0 4.48659 1.1246 3.36199 2.51186 3.36199H5.96967V2.7894ZM2.51186 4.50716C1.75706 4.50716 1.14517 5.11905 1.14517 5.87385C1.14517 6.39998 1.44719 6.8794 1.92175 7.10657L5.17109 8.66205C5.45633 8.79859 5.57686 9.14051 5.44032 9.42574C5.30378 9.71098 4.96186 9.83152 4.67663 9.69497L1.64395 8.24321V12.0654C1.64395 13.0141 2.41302 13.7832 3.36171 13.7832H12.6383C13.587 13.7832 14.356 13.0141 14.356 12.0654V8.24321L11.3234 9.69497C11.0381 9.83152 10.6962 9.71098 10.5597 9.42574C10.4231 9.14051 10.5437 8.79859 10.8289 8.66205L14.0783 7.10657C14.5528 6.8794 14.8548 6.39998 14.8548 5.87385C14.8548 5.11905 14.2429 4.50716 13.4881 4.50716H2.51186ZM8.8326 3.36199H7.11484V2.7894C7.11484 2.47317 7.37119 2.21682 7.68743 2.21682H8.26001C8.57624 2.21682 8.8326 2.47317 8.8326 2.7894V3.36199ZM7.68743 9.00594C7.37119 9.00594 7.11484 9.2623 7.11484 9.57853V10.1511C7.11484 10.4673 7.37119 10.7237 7.68743 10.7237H8.26001C8.57624 10.7237 8.8326 10.4673 8.8326 10.1511V9.57853C8.8326 9.2623 8.57624 9.00594 8.26001 9.00594H7.68743ZM5.96967 9.57853C5.96967 8.62984 6.73873 7.86077 7.68743 7.86077H8.26001C9.20871 7.86077 9.97777 8.62984 9.97777 9.57853V10.1511C9.97777 11.0998 9.20871 11.8689 8.26001 11.8689H7.68743C6.73873 11.8689 5.96967 11.0998 5.96967 10.1511V9.57853Z',
      fill: 'currentColor',
      key: '1misct',
    },
  ],
]);

export default Briefcase;
