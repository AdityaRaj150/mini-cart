export default function List({ title }) {
  return (
    <li className="text-slate-400 opacity-0 lg:opacity-100 hover:text-slate-100 cursor-pointer transition-all ease-in-out">
      {title}
    </li>
  );
}
