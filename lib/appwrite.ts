import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
  Account,
  Avatars,
  Client,
  Databases,
  OAuthProvider,
} from "react-native-appwrite";

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

// 사용자 로그인
export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Create OAuth2 token failed");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success")
      throw new Error("Create OAuth2 token failed");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Create OAuth2 token failed");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

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
