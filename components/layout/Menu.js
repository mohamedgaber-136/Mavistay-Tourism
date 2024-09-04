import Link from "next/link";

export default function Menu() {

  return (
    <div>
      <ul  >
      <li className="mean-last">
                <Link href="/contact">اتصل بنا</Link>
              </li>
              <li>
                <Link href="/service">خدمات</Link>
              </li>
              <li>
                <Link href="/about">من نحن</Link>
              </li>
      <li>
                <Link href="/">الرئيسيه</Link>
              </li>
            
           
          
              
      </ul>
    </div>
  );
}
