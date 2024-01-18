export async function get<T = any>(url: string): Promise<T> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();

  return result;
}

export async function post<T = any>(url: string, data: any): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();

  return result;
}
