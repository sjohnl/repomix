window.BENCHMARK_DATA = {
  "lastUpdate": 1793146586994,
  "repoUrl": "https://github.com/sjohnl/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a835271f41701245ee24b3c8ba162c5abb3d6f12",
          "message": "Merge pull request #1912 from plox-sumit/fix/css-url-not-a-comment\n\nfix(core): Keep unquoted URLs when removing CSS comments",
          "timestamp": "2026-10-26T00:46:24+09:00",
          "tree_id": "fd64bb51e822dc842be1218667d7a55f4a3bd732",
          "url": "https://github.com/sjohnl/repomix/commit/a835271f41701245ee24b3c8ba162c5abb3d6f12"
        },
        "date": 1793146586668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 846,
            "range": "±86",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 800ms, Q3: 886ms\nAll times: 724, 731, 752, 766, 786, 786, 800, 800, 802, 803, 825, 827, 842, 844, 845, 846, 848, 858, 863, 873, 877, 878, 886, 892, 900, 908, 995, 1019, 1273, 1279ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 958,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 949ms, Q3: 963ms\nAll times: 935, 937, 941, 943, 947, 949, 950, 953, 955, 957, 958, 960, 961, 962, 962, 963, 971, 981, 1002, 1096ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1305,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1294ms, Q3: 1310ms\nAll times: 1264, 1281, 1285, 1286, 1289, 1294, 1295, 1298, 1298, 1304, 1305, 1308, 1308, 1309, 1309, 1310, 1314, 1314, 1319, 1323ms"
          }
        ]
      }
    ]
  }
}