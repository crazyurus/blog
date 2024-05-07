export async function get<T = any>(url: string, headers?: any): Promise<T> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();

  return result;
}

export async function post<T = any>(url: string, data: any, headers?: any): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();

  return result;
}
