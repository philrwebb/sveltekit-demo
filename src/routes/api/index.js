import faker from "faker";

const generateUsers = () =>
  [...Array(50)].map(() => {
    const lastName = faker.name.lastName();
    return {
      avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
      lastName,
    };
  });

export async function get() {
  return {
    body: generateUsers(),
  };
}