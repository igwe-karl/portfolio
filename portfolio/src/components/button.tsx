import { Button as ButtonComponent } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof ButtonComponent>;

export default function Button({ children, ...props }: ButtonProps) {
  return <ButtonComponent className="cursor-pointer" {...props}>{children}</ButtonComponent>;
}
