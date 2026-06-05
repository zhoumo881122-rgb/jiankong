param(
  [Parameter(Mandatory = $true)]
  [string]$Token,

  [string]$Site = "jk.skyba.cn",

  [string]$UrlsFile = "urls.txt"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $UrlsFile)) {
  throw "URL file not found: $UrlsFile"
}

$endpoint = "http://data.zz.baidu.com/urls?site=$Site&token=$Token"

curl.exe -sS -H "Content-Type:text/plain" --data-binary "@$UrlsFile" $endpoint
