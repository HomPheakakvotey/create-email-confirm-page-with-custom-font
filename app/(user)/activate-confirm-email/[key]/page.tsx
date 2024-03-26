import { FontAwesome } from "@/components/icons/FontAwesome";
type props = {
  params: {
    key: string;
  };
  searchParams: any;
};
import style from "./style.module.css";
import Button from "../[key]/components/Button";

export default function ConfirmEmail(props: props) {
  return (
    <main className="style.container">
      {/* Confirm Email Card */}
      <section className="flex flex-col items-center my-6">
        <FontAwesome color="#090" classname="h-44 w-44 mb-8" />
        <h1 className="text-6xl my-4">Email has been confirmed!</h1>
        <p className="text-3xl my-4">
          Email របស់អ្នកត្រូវបានទទួលស្គាល់, សុំចុចប៉ូតុងខាងក្រោមដើម្បី Login!
        </p>
        <p className="text-3xl">
          Your email has been confirmed, Press the button below to Login!
        </p>
        <Button title="Login" classname="my-8" />
      </section>
    </main>
  );
}
