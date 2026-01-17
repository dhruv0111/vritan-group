import { useEffect, useState } from 'react';

export type Persona = 'investor' | 'developer' | 'founder' | 'default';

export function usePersonalization(): Persona {
  const [persona, setPersona] = useState<Persona>('default');

  useEffect(() => {
    const ref = document.referrer.toLowerCase();

    if (ref.includes('linkedin')) setPersona('investor');
    else if (ref.includes('github')) setPersona('developer');
    else setPersona('founder');
  }, []);

  return persona;
}
