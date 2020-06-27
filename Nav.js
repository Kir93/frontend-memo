import Link from "next/link";
import { useRouter } from "next/router";


export const MyNav = () => {

  const router = useRouter();

  return (
    <ul>
      <li className={router.pathname == "/" ? "active" : ""}>
        <Link href="/">home</Link>
      </li>
      <li className={router.pathname == "/about" ? "active" : ""}>
        <Link href="/about">about</Link>
      </li>
    </ul>
  );
};
