#!/bin/bash
set -e

REPO="svlucero/pheron"
APP_NAME="pheron"

# Detect architecture
ARCH=$(uname -m)
if [ "$ARCH" = "arm64" ]; then
  ASSET_PATTERN="aarch64.dmg"
elif [ "$ARCH" = "x86_64" ]; then
  ASSET_PATTERN="x64.dmg"
else
  echo "Error: Unsupported architecture: $ARCH"
  exit 1
fi

# Get latest release download URL
echo "Fetching latest release..."
DOWNLOAD_URL=$(curl -sL "https://api.github.com/repos/${REPO}/releases/latest" \
  | grep "browser_download_url.*${ASSET_PATTERN}" \
  | head -1 \
  | cut -d '"' -f 4)

if [ -z "$DOWNLOAD_URL" ]; then
  echo "Error: Could not find DMG for ${ASSET_PATTERN}"
  exit 1
fi

VERSION=$(echo "$DOWNLOAD_URL" | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')
echo "Installing ${APP_NAME} v${VERSION} (${ARCH})..."

# Download
DMG_FILE="/tmp/${APP_NAME}.dmg"
curl -L -o "$DMG_FILE" "$DOWNLOAD_URL"

# Mount, copy, cleanup
echo "Installing to /Applications..."
hdiutil attach "$DMG_FILE" -quiet
cp -R "/Volumes/${APP_NAME}/${APP_NAME}.app" /Applications/
hdiutil detach "/Volumes/${APP_NAME}" -quiet
rm "$DMG_FILE"

echo "Done! ${APP_NAME} v${VERSION} installed in /Applications."
echo "Run it from Applications or with: open /Applications/${APP_NAME}.app"
