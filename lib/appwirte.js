import { Account, Avatars, Client, Databases, ID } from " react-native-appwrite";
import SignIn from "../app/(auth)/sign-in";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.porn",
  projectId: "669240cc00122c260f74",
  databaseId: "669242b60032f963afa6",
  userCollectionId: "669242eb001da27a3109",
  videoCollectionId: "66924334003d6009630d",
  storageId: "66924518001f3dea0c89",
};
// Init your React Native SDK
const client = new Client();
client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform);
// Your application ID or bundle ID.
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async (email, password, username) => {
  // Register User
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
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
