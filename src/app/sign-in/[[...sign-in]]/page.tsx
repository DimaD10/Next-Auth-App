
import { NextPage } from "next";
import { MainSection } from "../../components/main/main";
import { ClerkLoading, SignIn } from "@clerk/nextjs";
import Overlay from "@/app/components/overlay/overlay";

const SignInPage: NextPage = () => {
    

  return (
    <MainSection>
      <div className="authForm">
        <ClerkLoading>
            <Overlay info="Form is loading..." />
        </ClerkLoading>

        <SignIn path="/sign-in" />
      </div>
    </MainSection>
  );
};

export default SignInPage;
