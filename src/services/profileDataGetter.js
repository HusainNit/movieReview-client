import Client from "./api";

export const ProfileData = async () => {
  try {
    const res = await Client.get(`/user/`);
    return res.data;
  } catch (error) {
    console.error("Error in ProfileGetter:", error);
    throw error;
  }
};
