<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TinyPaws Appcast</title>
        <style>
          :root {
            color-scheme: light;
            --bg: #f6efe5;
            --panel: rgba(255, 252, 247, 0.92);
            --line: rgba(81, 53, 24, 0.12);
            --text: #2f2418;
            --muted: #75624e;
            --accent: #c96f2d;
            --accent-strong: #9b4a14;
            --chip: #fff4df;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: "SF Pro Text", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
            color: var(--text);
            background:
              radial-gradient(circle at top, rgba(255, 210, 160, 0.6), transparent 34%),
              linear-gradient(180deg, #fff8ef 0%, var(--bg) 100%);
          }

          .shell {
            max-width: 920px;
            margin: 0 auto;
            padding: 48px 20px 72px;
          }

          .hero,
          .card {
            background: var(--panel);
            border: 1px solid var(--line);
            border-radius: 24px;
            box-shadow: 0 20px 50px rgba(84, 54, 25, 0.08);
            backdrop-filter: blur(10px);
          }

          .hero {
            padding: 32px;
          }

          .eyebrow {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 999px;
            background: var(--chip);
            color: var(--accent-strong);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          h1 {
            margin: 18px 0 12px;
            font-size: clamp(32px, 6vw, 52px);
            line-height: 1.02;
          }

          .hero p,
          .note,
          .meta dd,
          .release p {
            color: var(--muted);
            line-height: 1.65;
          }

          .grid {
            display: grid;
            gap: 20px;
            margin-top: 20px;
          }

          .card {
            padding: 24px;
          }

          .meta {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 16px;
            margin-top: 24px;
          }

          .meta dt {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--accent-strong);
          }

          .meta dd {
            margin: 8px 0 0;
            font-size: 16px;
          }

          .label {
            display: inline-block;
            margin-bottom: 10px;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--chip);
            color: var(--accent-strong);
            font-size: 12px;
            font-weight: 700;
          }

          .release h2 {
            margin: 0 0 10px;
            font-size: 28px;
          }

          .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 24px;
          }

          .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 46px;
            padding: 0 18px;
            border-radius: 999px;
            background: var(--accent);
            color: #fffaf5;
            text-decoration: none;
            font-weight: 700;
          }

          .button.secondary {
            background: transparent;
            color: var(--accent-strong);
            border: 1px solid rgba(155, 74, 20, 0.18);
          }

          code {
            padding: 2px 7px;
            border-radius: 999px;
            background: rgba(109, 74, 38, 0.08);
            font-family: "SF Mono", "SFMono-Regular", ui-monospace, monospace;
            font-size: 0.95em;
          }

          @media (max-width: 640px) {
            .shell {
              padding-top: 28px;
            }

            .hero,
            .card {
              padding: 20px;
              border-radius: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="shell">
          <section class="hero">
            <span class="eyebrow">TinyPaws Update Feed</span>
            <h1>
              <xsl:value-of select="rss/channel/title" />
            </h1>
            <p>
              This is the Sparkle appcast feed used by TinyPaws for in-app updates.
              The XML is still present for the app, but this view makes it easier to inspect in a browser.
            </p>
            <div class="meta">
              <div>
                <dt>Feed</dt>
                <dd><code>/appcast.xml</code></dd>
              </div>
              <div>
                <dt>Latest Version</dt>
                <dd><xsl:value-of select="rss/channel/item[1]/sparkle:shortVersionString" /></dd>
              </div>
              <div>
                <dt>Build</dt>
                <dd><xsl:value-of select="rss/channel/item[1]/sparkle:version" /></dd>
              </div>
              <div>
                <dt>Minimum macOS</dt>
                <dd><xsl:value-of select="rss/channel/item[1]/sparkle:minimumSystemVersion" /></dd>
              </div>
            </div>
          </section>

          <div class="grid">
            <xsl:for-each select="rss/channel/item">
              <article class="card release">
                <span class="label">Release</span>
                <h2><xsl:value-of select="title" /></h2>
                <p><xsl:value-of select="pubDate" /></p>
                <p>
                  Download archive size:
                  <code><xsl:value-of select="enclosure/@length" /> bytes</code>
                </p>
                <div class="actions">
                  <a class="button" href="{enclosure/@url}">Download</a>
                  <a class="button secondary" href="{sparkle:releaseNotesLink}">Release Notes</a>
                </div>
              </article>
            </xsl:for-each>
          </div>

          <p class="note">
            Sparkle will continue reading the underlying XML feed normally. This stylesheet only affects how the file is displayed in a browser.
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
