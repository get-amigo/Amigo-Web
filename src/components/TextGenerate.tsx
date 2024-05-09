"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Introducing Amigo, your all-in-one financial companion designed to transform the way you manage your money. With Amigo by your side, you gain effortless control over your finances, from organizing shared expenses with roommates to budgeting for future adventures with friends. Say goodbye to financial stress and hello to a simpler, smarter approach to money management. Seamlessly navigate your financial landscape with Amigo's intuitive features, empowering you to achieve your financial goals with confidence. Join the Amigo community today and experience a better way to split your money.
`;

export function TextGenerateEffectDemo() {
  return (<>
    <div className="text-center p-4">
    <TextGenerateEffect words={words} />;
    </div>
  </>)

}
