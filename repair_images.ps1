$mapping = @{
    'images/unsplash_photo-1497215728101-856f4ea42174.webp' = 'images/0.webp'
    'images/unsplash_photo-1497366216548-37526070297c.webp' = 'images/2.webp'
    'images/unsplash_photo-1522071820081-009f0129c71c.webp' = 'images/3.webp'
    'images/unsplash_photo-1497366754035-f200968a6e72.webp' = 'images/4.webp'
    'images/unsplash_photo-1527689368864-3a821dbccc34.webp' = 'images/7.webp'
    'images/unsplash_photo-1522202176988-66273c2fd55f.webp' = 'images/8.webp'
    'images/unsplash_photo-1517502884422-41eaaced0168.webp' = 'images/9.webp'
    'images/unsplash_photo-1494790108377-be9c29b29330.webp' = 'images/women.webp'
    'images/unsplash_photo-1507003211169-0a1dd7228f2d.webp' = 'images/men1.webp'
    'images/unsplash_photo-1500648767791-00dcc994a43e.webp' = 'images/men2.webp'
}

Get-ChildItem -Filter *.html -File | ForEach-Object {
    $path = $_.FullName
    $content = Get-Content -Path $path -Raw
    $updated = $content

    foreach ($old in $mapping.Keys) {
        $updated = $updated.Replace($old, $mapping[$old])
    }

    if ($updated -ne $content) {
        Set-Content -Path $path -Value $updated -Encoding utf8
        Write-Output "updated $($_.Name)"
    }
}
