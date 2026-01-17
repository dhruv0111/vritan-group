export async function submitApplication(data: FormData) {
  const res = await fetch('http://localhost:5000/apply', {
    method: 'POST',
    body: data,
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }

  return res.json();
}
