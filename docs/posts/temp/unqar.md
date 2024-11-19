---
shortTitle: 提取 .qar
title: 用于提取 Quartus II .qar archives 的快速而简单的脚本
category:
    - 手记
tags:
date: 2024-11-19
---

Quick and dirty script to extract Quartus II .qar archives

::: tabs

@tab Newest (Python 3)

```py
# Quick and dirty script to extract Quartus II .qar archives
import os, sys, struct, zlib

buf = open(sys.argv[1], 'rb').read()

file_no = struct.unpack_from('<H', buf, 2)[0]

off = 4
for _ in range(file_no):
    (len, unk, filename_len) = struct.unpack_from('<IHH', buf, off)
    content = buf[off + 8 + filename_len:off + 8 + filename_len + len]
    
    # Modify these lines to work with Python 3 bytes
    if buf[off + 8 + filename_len] == 0x78 and buf[off + 8 + filename_len + 1] == 0x9C:
        content = zlib.decompress(content)
    else:
        print('Not Zlib')
        assert(False)
    
    fn = buf[off + 8: off + 8 + filename_len].decode('utf-8')
    dest_fn = 'qar_content/' + fn
    print('Extracting {}'.format(fn))
    
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(dest_fn), exist_ok=True)
    
    # Write decompressed content to the destination file
    with open(dest_fn, 'wb') as fp:
        fp.write(content)
    
    off += 8 + filename_len + len
```

@tab Original (Python 2)

```py
# Quick and dirty script to extract Quartus II .qar archives
import os, sys, struct, zlib

buf = open(sys.argv[1], 'rb').read()

file_no = struct.unpack_from('<H', buf, 2)[0]

off = 4
for _ in range(file_no):
    (len, unk, filename_len) = struct.unpack_from('<IHH', buf, off)
    content = buf[off + 8 + filename_len:off + 8 + filename_len + len]
    if ord(buf[off + 8 + filename_len]) == 0x78 and \
       ord(buf[off + 8 + filename_len + 1]) == 0x9C:
        content = zlib.decompress(content)
    else:
        print('Not Zlib')
        assert(false)
    fn = buf[off + 8: off + 8 + filename_len]
    dest_fn = 'qar_content/' + fn
    print('Extracting {}'.format((fn)))
    try:
        os.makedirs(os.path.dirname(dest_fn))
    except OSError:
        pass
    with open(dest_fn, 'w+b') as fp:
        fp.write(content)
    off += 8 + filename_len + len
```

> <https://gist.github.com/LemonBoy/2903f324d9ed6d241ad93a01ffca8ebd>

:::