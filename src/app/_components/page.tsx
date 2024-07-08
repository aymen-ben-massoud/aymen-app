import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export function  TopNav(){

    return(

  <nav className="bg-black text-white flex justify-between text-xl content-baseline"> 
  <h1 className="m-2">Navbar</h1> 
 <div>
<SignedOut>
    <SignInButton>

    </SignInButton>
</SignedOut>
<SignedIn>
    <UserButton></UserButton>
</SignedIn>

 </div>
   </nav> 
    )
}