<script context="module">
    export async function load({ fetch, page }) {
      const { lastName } = page.params;
      const res = await fetch(`/api/${lastName}`);
  
      if (res.ok) return { props: { user: await res.json() } };
      return {
        status: res.status,
        error: new Error(),
      };
    }
  </script>
  
  <script>
    export let user;
  </script>
  
  <main>
    <h1>{user.firstName} {user.lastName}</h1>
    <div class="box">
      <img src="{user.avatar}" alt="{user.astName}" />
      <ul>
        <li>Title: {user.title}</li>
        <li>Phone: {user.phone}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  </main>
  
  <style>
    main {
      margin: 4rem;
      padding: 2rem;
      color: gray;
      justify-content: center;
      box-shadow: 4px 5px 11px 10px lightgray;
    }
    h1 {
      color: salmon;
    }
    .box {
      display: flex;
      font-size: 1.5rem;
    }
    img {
      width: 15rem;
      object-fit: contain;
      margin-right: 2rem;
    }
    li {
      margin-bottom: 1rem;
    }
  </style>