export async function onRequest(context) {
  const { request, env } = context;
  const token = env.GITHUB_TOKEN;
  const REPO = 'adimovi/adimovi.github.io';
  const BRANCH = 'main';

  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://thefrontdev.ro',
    'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const url = new URL(request.url);
  const file = url.searchParams.get('file') || 'projects.json';

  // Only allow specific files
  const allowedFiles = ['projects.json', 'testimonials.json'];
  if (!allowedFiles.includes(file)) {
    return new Response(JSON.stringify({ error: 'File not allowed' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  const ghUrl = `https://api.github.com/repos/${REPO}/contents/${file}`;
  const ghHeaders = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'User-Agent': 'thefrontdev-admin'
  };

  try {
    if (request.method === 'GET') {
      const res = await fetch(ghUrl, { headers: ghHeaders });
      if (!res.ok) {
        if (res.status === 404) {
          return new Response(JSON.stringify({ content: btoa('[]'), sha: null }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
        throw new Error(`GitHub error: ${res.status}`);
      }
      const data = await res.json();
      return new Response(JSON.stringify({ content: data.content, sha: data.sha }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'PUT') {
      const body = await request.json();
      const res = await fetch(ghUrl, {
        method: 'PUT',
        headers: ghHeaders,
        body: JSON.stringify({
          message: body.message || `Update ${file}`,
          content: body.content,
          sha: body.sha || undefined,
          branch: BRANCH
        })
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || `GitHub error: ${res.status}`);
      }
      const data = await res.json();
      return new Response(JSON.stringify({ sha: data.content.sha }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}
