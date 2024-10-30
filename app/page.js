import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modetoggle";
import Image from "next/image";

export default function Home() {
  let hello; 
  return (
    <div>
      <Button>&rarr;</Button>
      <ModeToggle/>
    </div>
  );
}
