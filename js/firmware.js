export async function loadFirmwareList() {
  const manifestUrl = new URL("firmware/manifest.json", window.location.href);
  manifestUrl.searchParams.set("ts", Date.now().toString());

  const response = await fetch(manifestUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.releases || [];
}
