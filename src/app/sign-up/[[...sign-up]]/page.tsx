import { NextPage } from "next";
import { MainSection } from "../../components/main/main";
import { ClerkLoading, SignUp } from "@clerk/nextjs";
import Overlay from "@/app/components/overlay/overlay";

const SignUpPage: NextPage = () => {
  return (
    <MainSection>
      <ClerkLoading>
            <Overlay info="Form is loading..." />
      </ClerkLoading>

      <div className="authForm">
        <SignUp path="/sign-up" />
      </div>
    </MainSection>
  );
};

export default SignUpPage;
