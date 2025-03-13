import { Footer } from "./Footer";
import { Header } from "./Header";

export const Next = () => {
  return (
    <div>
      <Header
        headertext1="You're All Set 🔥"
        headertext="We have received your submission. Thank you!"
      />
      <Footer hideCount={4} />
    </div>
  );
};
