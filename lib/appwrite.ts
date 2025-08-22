import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

const config = {
  endpoint:
    process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
    "https://syd.cloud.appwrite.io/v1",
  projectId:
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || "68a46be400076dcb05e7",
  projectName:
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME || "react-native-app",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform("com.reactnativeapp"); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// 사용자 회원가입
export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = {
      accountId: newAccount.$id,
      email: newAccount.email,
      username: newAccount.name,
      avatar: avatarUrl,
    };

    return newUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// 사용자 로그인
export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// 현재 사용자 가져오기
export const getCurrentUser = async () => {
  try {
    const response = await account.get();

    if (response.$id) {
      const userAvatar = avatars.getInitials(response.name);

      return {
        ...response,
        avatar: userAvatar.toString(),
      };
    }
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
// 로그아웃
export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export { account, avatars, client, config, databases };
