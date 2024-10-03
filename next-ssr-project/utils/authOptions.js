import connectDB from "@/config/database";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      // eslint-disable-next-line no-undef
      clientId: process.env.GOOGLE_CLIENT_ID,
      // eslint-disable-next-line no-undef
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async singIn({ profile }) {
      console.log(profile);

      await connectDB();
      const userExists = await User.findOne({ email: profile.email });
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }
      return true;
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      console.log(user);
      session.user.id = user._id.toString();
      return session;
    },
  },
};
