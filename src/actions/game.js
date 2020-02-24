import axios from "axios";

const databaseUrl = "http://localhost:4000";

export async function updatePoints(points, userId, lobbyId) {
  console.log(points, userId, lobbyId);
  const response = await axios.post(`${databaseUrl}/userResponse`, {
    points,
    lobbyId
  });
  // console.log("DID I GET A RESPONSE?", response);
  if (response) {
    const secondResponse = await axios.put(`${databaseUrl}/user/${userId}`, {
      usersResponseId: response.data.id
    });
    if (secondResponse) {
      const thirdResponse = await axios.get(`${databaseUrl}/points`);
      console.log(thirdResponse);
    }
  }
}
