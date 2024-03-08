import { TResponseSearchUsers, TUserFiltered } from "./types.ts";

export const baseApiSearchUrl = "https://dummyjson.com/users/search?q=";

export const getUsersSearched = async (retries = 3, user: string) => {
  try {
    const res = await fetch(`${baseApiSearchUrl}${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Network response was not ok, status: ${res.status}`);
    }
    const data: TResponseSearchUsers = await res.json();
    const result: TUserFiltered[] = data.users.map((user) => ({
      id: user.id,
      firstName: user.firstName ?? 'Получить имя не удалось',
      lastName: user.lastName ?? 'Получить фамилию не удалось',
      image: user.image ?? 'Получить изображение не удалось',
      address: {
        city: user.address.city ?? 'Получить город не удалось',
      },
    }));
    return result;
  } catch (error) {
    error instanceof Error
      ? console.error("Fetch error:", error.message)
      : console.error("Unknown Error");
    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries - 1}`);
      await getUsersSearched(retries - 1, user);
    } else {
      console.log("Exceeded maximum number of retries");
    }
  }
};
