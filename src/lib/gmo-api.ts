//残高照会APIのレスポンス型定義
type BalanceResponse = {
  balances: {
    balance: string;
  }[];
};

export async function getBalance(): Promise<BalanceResponse | null> {
  const url = process.env.GMO_API_BASE_URL + "/accounts/balances";
  const accessToken = process.env.GMO_ACCESS_TOKEN;

  if (!accessToken) {
    console.error("アクセストークンが定義されていません");
    return null;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
        "x-access-token": accessToken,
      },
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(
        "GMO APIのfetchに失敗しました:",
        response.status,
        response.statusText
      );
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return null;
    }

    const data: BalanceResponse = await response.json();
    return data;
  } catch (error) {
    console.error("GMO APIのfetch中にエラーが発生しました：", error);
    return null;
  }
}
