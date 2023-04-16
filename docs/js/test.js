(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6787],
  {
    96787: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          HomeButton: function () {
            return re;
          },
          SignInButton: function () {
            return ce;
          },
          __N_SSG: function () {
            return te;
          },
          default: function () {
            return ne;
          }
        });
      var n = t(85893),
        i = t(602),
        r = t(67294),
        s = t(44080);
      var c = r.forwardRef(function (e, a) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: a
            },
            e
          ),
          r.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
          })
        );
      });
      var o = r.forwardRef(function (e, a) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 2,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: a
              },
              e
            ),
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            })
          );
        }),
        d = t(38264),
        l = t(95301),
        f = t(59700),
        b = t(44681),
        u = t(64810),
        m = t(22600),
        h = t(24634),
        g = t(33299),
        p = t(41664),
        x = t.n(p),
        v = t(11163),
        y = t(4298),
        w = t.n(y),
        j = t(44304),
        _ = function (e) {
          var a = function (e, a, t) {
              return (
                t >= e.length && (t = e.length - 1),
                e.splice(t, 0, e.splice(a, 1)[0]),
                e
              );
            },
            t = function () {
              var e = v.getBoundingClientRect(),
                a = e.x + e.width / 2,
                t = e.y + e.height / 2,
                n = p - a,
                i = x - t;
              gsap.to(y, {
                ease: "sine.inOut",
                duration: 0.7,
                x: "+=".concat(n),
                y: "+=".concat(i)
              });
            },
            n = function () {
              document.elementsFromPoint(p, x).forEach(function (e) {
                e.matches(k) &&
                  !v.isSameNode(e) &&
                  (function (e) {
                    var t = -1,
                      n = -1;
                    if (
                      (T.forEach(function (a, i) {
                        a.forEach(function (a, r) {
                          e.isSameNode(a) && ((t = i), (n = r));
                        });
                      }),
                      -1 !== t)
                    ) {
                      if (t < d)
                        for (var i = t; i < d; i++) {
                          var r = gsap.getProperty(I[0], "y");
                          if (I.length % 2 === 1) {
                            var s = I[I.length - 1];
                            "true" === s.dataset.offset
                              ? (gsap.set(s, {
                                  y: r - b - f,
                                  x: "+=".concat(l / 2)
                                }),
                                (s.dataset.offset = "false"))
                              : (gsap.set(s, {
                                  y: r - b - f,
                                  x: "-=".concat(l / 2)
                                }),
                                (s.dataset.offset = "true"));
                          } else gsap.set(I[I.length - 1], { y: r - b - f });
                          a(T, T.length - 1, 0), a(I, I.length - 1, 0);
                        }
                      else if (t > d)
                        for (var u = d; u < t; u++) {
                          var m = gsap.getProperty(I[I.length - 1], "y");
                          if (I.length % 2 === 1) {
                            var h = I[0];
                            "true" === h.dataset.offset
                              ? (gsap.set(h, {
                                  y: m + b + f,
                                  x: "-=".concat(l / 2)
                                }),
                                (h.dataset.offset = "false"))
                              : (gsap.set(h, {
                                  y: m + b + f,
                                  x: "+=".concat(l / 2)
                                }),
                                (h.dataset.offset = "true"));
                          } else gsap.set(I[0], { y: m + b + f });
                          a(T, 0, T.length - 1), a(I, 0, I.length - 1);
                        }
                      if (n < o)
                        for (var g = 0; g < c.length; g++)
                          for (var p = T[g], x = n; x < o; x++) {
                            var v = gsap.getProperty(p[0], "x");
                            gsap.set(p[p.length - 1], { x: v - b - l }),
                              a(p, p.length - 1, 0);
                          }
                      else if (n > o)
                        for (var y = 0; y < c.length; y++)
                          for (var w = T[y], j = o; j < n; j++) {
                            var _ = gsap.getProperty(w[E - 1], "x");
                            gsap.set(w[0], { x: _ + b + l }),
                              a(w, 0, w.length - 1);
                          }
                    }
                  })((v = e));
              });
            },
            i = function () {
              (p = innerWidth / 2),
                (x = innerHeight / 2),
                (f = 0.2 * innerHeight),
                (h = -(o * (u = (l = f) + (b = 12)) + l / 2) + p),
                (g = -(d * (m = f + b) + f / 2) + x),
                gsap.set(y, { x: 0, y: 0 }),
                c.forEach(function (e, a) {
                  gsap.set(e, {
                    attr: {
                      "data-offset": function () {
                        return a % 2 !== 0;
                      }
                    },
                    x: function () {
                      return a % 2 === 0 ? h : h - l / 2;
                    },
                    y: function () {
                      return a * m + g;
                    }
                  }),
                    gsap.set(e.querySelectorAll(k), {
                      width: l,
                      height: f,
                      x: function (e) {
                        return e * u;
                      }
                    }),
                    (I[a] = e);
                });
            },
            r = function (e) {
              return gsap.utils.random(0, e.length - 1, 1);
            },
            s = function () {
              for (var e = C[r(C)], a = O.has(e), t = 0; a && t < 3; )
                (e = N[r(N)]), (a = O.has(e)), t++;
              O.set(e, !0);
              var n = (function (e) {
                return ""
                  .concat("https://cdn.midjourney.com", "/")
                  .concat(e, "/grid_0_384_N.webp");
              })(e);
              return "url(".concat(n, ")");
            };
          gsap.registerPlugin(Draggable);
          var c,
            o,
            d,
            l,
            f,
            b,
            u,
            m,
            h,
            g,
            p,
            x,
            v,
            y = "#".concat("imageContainer"),
            w = "row",
            j = ".".concat(w),
            _ = "sliderImage",
            k = ".".concat(_),
            C = e || N,
            S = (C && C.length, 12),
            E = 12,
            M = !0,
            A = !0,
            I = [],
            T = [],
            O = new Map();
          gsap.set(y, { willChange: "transform" }),
            (function () {
              for (var e = 0; e < S; e++) {
                var a = document.createElement("div");
                a.className = w;
                for (var t = 0; t < E; t++) {
                  var n = document.createElement("div");
                  (n.className = _), a.appendChild(n);
                }
                document.querySelector(y).appendChild(a),
                  T.push(gsap.utils.toArray(a.querySelectorAll(k)));
              }
              (c = document.querySelectorAll(j)),
                (o = Math.floor(E / 2)),
                (d = Math.floor(S / 2));
            })(),
            (function () {
              var e = document.createElement("div");
              (e.className = "mask"),
                document.getElementById("imageContainerParent").appendChild(e),
                gsap.set(e, {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  zIndex: 9999
                });
            })(),
            (v = document.querySelectorAll(k)[(d - 1) * E + o]),
            (function () {
              var e = {
                trigger: ".mask",
                dragResistance: 0.4,
                resistance: 400,
                onDrag: n
              };
              M
                ? ((e.inertia = !0),
                  (e.onThrowUpdate = n),
                  A && (e.onThrowComplete = t))
                : A && (e.onDragEnd = t),
                Draggable.create(y, e);
            })(),
            (function () {
              var e = Math.floor(Math.max(innerWidth, innerHeight) / 3);
              gsap.set(k, {
                backgroundImage: function (a) {
                  return C
                    ? s()
                    : "url(https://picsum.photos/"
                        .concat(e, "/")
                        .concat(e, "?random=")
                        .concat(a, ")");
                },
                position: "absolute",
                backgroundSize: "cover",
                backgroundColor: "rgba(255,255,255,0.05)",
                backgroundPosition: "center",
                top: 0,
                left: 0,
                borderRadius: "1rem",
                overflow: "hidden"
              }),
                gsap.set(j, { position: "absolute" });
            })(),
            i(),
            window.addEventListener("resize", i);
        },
        N = [
          "4dc64f6a-4d61-416a-8304-7b4ec12bf332",
          "f71353ca-2804-483b-be8f-e6c5c950c391",
          "969aeb4a-5574-4ca4-8282-29295196be05",
          "eda4a2e8-e46d-447c-a6cf-ee4bd974a508",
          "7b5befc5-78ff-4009-8609-e7e30eebdf22",
          "41dd3b47-e623-4fd2-9e2d-356b1256d9aa",
          "ab445c46-22a5-48fe-bb6c-8688db0cfb56",
          "33475b10-0c53-47cd-81d7-6e05da2dd6e0",
          "bf0153f2-2f02-4e4b-8db8-3f847ab4d82e",
          "decd9402-f1d4-4ce3-90df-15fb09ecee19",
          "c715aa90-cc59-408f-bf7f-602bca6db73b",
          "084de1c5-ee87-48c1-8a49-9866e9d752b9",
          "36a6bc2a-e41b-4257-8f38-a307424f6ee4",
          "edb074cd-62db-4357-af45-87ea3a0ef011",
          "12af2e0c-a666-4088-9f7a-06a5e727fa15",
          "4cc5ab75-e4ec-4ec6-b182-ab3242ce7d58",
          "f2789036-9d11-4efc-b917-d38be6d7e0a2",
          "4cf6c0df-6750-4dd3-9655-28b70ec12f27",
          "b936ac73-da23-4c68-9e54-eb43061fff02",
          "fb24185e-aea8-4bd1-a010-a0303e91e841",
          "f7b53327-433d-412a-a542-78fc36d18500",
          "8cae3d9f-a236-43ae-a4d2-843f6d2770c3",
          "1e2f3a43-07d1-4cc3-b4ee-ea6c8bbd9161",
          "5853d4a2-7898-475a-9143-138b7906eac2",
          "904075d1-2ff8-4189-b8e4-69c4fe7128b6",
          "5dbc2f51-56e4-4432-81d5-872d53734714",
          "e46be5e7-1f6f-4732-8c3d-54a5b139f12c",
          "54626b5f-0551-4876-817b-bef62ff2107d",
          "9401953d-f0b4-4fc0-a03f-4eee0f706581",
          "5e1a63ff-ba71-4c04-b764-aec81a5c7f44",
          "3292fa2a-28e3-4920-90d7-0b91ac398ec3",
          "65f92feb-6912-4806-b47c-1f66c548b684",
          "25402cf5-09d6-4832-bc3d-2bfa6b4d350b",
          "70096047-46f2-4f31-8648-a268041a5ac3",
          "d89dc9e1-22fd-4e0f-9e43-eb7a1a6b44f3",
          "b6f233db-85b1-4ef8-92e7-e0ee95b15763",
          "34230f59-c8ca-4065-8ee4-6c1e3dd04b7d",
          "622fbc7d-fa98-4eab-888b-38f9e0fb2bd1",
          "e1fd9c74-100a-433a-a93a-4f7feffe74fb",
          "d7bb69de-06cf-40ea-b7eb-6a4a2b5ddc24",
          "db453615-4845-43d2-a4e3-f8b1fa7d7961",
          "43b9a115-860b-4b73-bae0-c7b11fdace7a",
          "0722af68-7504-4cc0-8a53-ae030ed691a8",
          "5dd01a6b-3546-4170-abfb-96eaed93abbb",
          "831dee52-8e86-418e-9aea-4326f3677243",
          "03090ee0-6c5a-40c2-95c0-5abad82d2347",
          "5c514b17-1715-45fa-8a63-66b1d2983f7e",
          "a688c01f-6d5e-42da-8f89-b921b304bf63",
          "14f1225c-4779-499a-b7e7-cea20391f5b2",
          "32cf0d05-2d49-428d-85f7-68a26246f214",
          "249d2523-3b6e-45de-a836-56ddc3f83cb6",
          "b2f307e8-16ee-4593-a275-d4eec655cb59",
          "e7374c5b-4efc-4430-a90f-394899ec28bb",
          "072a2e14-4925-4fa2-b322-b0759eda8f50",
          "f4774d01-d704-4d30-9379-0fb54881b2d8",
          "1879e201-08dc-4d85-9bdd-88f2d1fe8259",
          "3a6a3b9e-5fa6-4503-a6e2-280d09eac197",
          "f4ecf4cb-460d-464d-9377-2e39fb2eb595",
          "37346da0-34c9-4d19-a9ed-05adb1b7bbab",
          "2add7857-2d7d-473a-be32-201ecba53638",
          "f0e4c733-fe58-46da-9842-38e759b463d9",
          "75d1a702-50c5-49f8-926b-b1015cb56838",
          "5d25d292-b0a2-4235-8a51-f0b1b78e7154",
          "337817b0-b918-45c9-96bc-52742ac1599f",
          "71526c1e-20d9-4db2-ab48-f9f4a3c92290",
          "4c220dda-273a-485f-988f-f93984914113",
          "1112d6f2-ded7-4eff-b147-7ea1592dd5d3",
          "e67e734d-d2c3-4d83-9240-5a6af19175e5",
          "e462774f-0c20-480c-8414-e21e71c29326",
          "a1e50217-43b2-4f88-b1ec-eb1fc4b99d74",
          "4ea99dfe-7e03-4ff3-8e02-e9eb4146a858",
          "03a080c1-3123-45e3-ba3c-cc3eb04b0bc7",
          "e616f6e5-250c-43c1-a8e5-2e614c3ff93f",
          "764ca0d5-423a-4659-a8bf-848e6c27ba8e",
          "adae7d60-2260-4766-b391-7f5c0a520f8f",
          "c4c8fac3-7174-480b-af89-99ede82b7b23",
          "bd305489-e39f-4d0b-8e31-91b6998ad325",
          "918150eb-2b07-406c-af5f-5e7b92e7eeb1",
          "064c3237-610c-4e51-b662-33d0ca580ae9",
          "b2c1cc23-cc7f-41e7-8575-35f22d141bc8",
          "27b1aeda-10c3-46ed-8ae6-3d7652d6b71c",
          "8502093c-f6aa-4c6b-ae47-0182230326b1",
          "edfe94bb-de84-4879-b902-eea35205261f",
          "0ddcaf15-51e7-4cb9-a663-70fe0e4f29f9",
          "f14fe9b0-0369-4a56-b0f1-9a4a9b7afae6",
          "dbc5969b-3410-4b4b-ab05-0ac03a5b1714",
          "78618bd3-54f8-48c1-98fb-d2ac724e0954",
          "b51d3cdf-bd6e-40c8-add1-c8a2aafa115a",
          "ea88db25-f0ce-4c31-b16d-1835ba0320e5",
          "c03ab630-b5d1-4a4b-bfde-dd9135700e52",
          "93d4b187-ee9f-4b2f-8964-64aa93eea251",
          "836837cd-80ba-415d-b4fe-b430b95f91c0",
          "7d4eb88e-1d3e-4d5e-8109-0bc5a93103e1",
          "8ee68da4-88da-41c3-ab86-3fceb7cb808a",
          "d7cec92c-d115-48c0-87f3-4573193ad5a8",
          "aac6859d-7b97-46f8-a2e6-142f6c3e10bd",
          "c3544832-a521-4313-a177-e56382bd2f9e",
          "ca51380c-9a3f-4b83-9ece-4edbdd7825f2",
          "19dadce7-c273-4a8b-abcb-b9230f4e04b9",
          "7bede2c4-93d5-456c-ae02-b3ef42626390",
          "c16fdb8f-7cd5-4db5-bb01-b5596990c31b",
          "ed3c555e-179e-4502-a242-783b95bf334a",
          "b5db0792-4298-4c9a-ae4b-9e36a268a579",
          "6dd7ac40-9656-42e4-ae00-7ca6565e9c5a",
          "694650e7-a190-4091-a44d-4f86fb26d411",
          "bec63394-1fbf-4508-b2f6-32f63272adec",
          "fdbe212b-2a98-4f99-bbba-406b43486766",
          "c60d2cff-b850-4ae7-9e3d-db472064baf7",
          "247819ab-63cb-47e8-a8cc-33329eefcbe6",
          "583e1a47-d459-4adc-a394-f3b707f98058",
          "24f1bd36-2b97-4237-963b-93678390f513",
          "58cb0303-8116-4cd0-b488-70cd77e1e93a",
          "ca7dea6e-72d3-442d-84dc-b18b4dc28df4",
          "3318ad51-fc8e-476c-92ef-73addc2613d9",
          "163d99bf-25fd-4115-b140-46c3b80c3f06",
          "96a43155-5a05-444f-8b86-7c40580ec712",
          "716a723c-b34b-44d1-aa23-e46869f2281b",
          "ab30ef20-efa3-4c2d-afd5-03441d2fd483",
          "19afadc2-2a1e-4a7e-899e-aab59fa61e96",
          "41ea634e-ae08-45d7-8747-127b16c1d158",
          "ef6fda3e-5d5a-437d-b5a1-740df37d4739",
          "c5f2a8ca-1283-4efa-bce2-9b226ac8ba4a",
          "e0cd9d8e-c24c-49f2-938b-3ec55e38e676",
          "e27d637e-4d0b-4ffc-b7c3-1a074b9a0951",
          "a09fd80a-f6fe-489a-ba87-5b3a6eee8081",
          "9f188168-8710-465a-9f60-261fd4ed79b1",
          "4fe9f24c-eeca-4c43-bd3b-78454d903736",
          "d1ce9052-2f28-4b77-adaa-456776c316f9",
          "aacf3c0f-e2f8-4443-b2ab-1565ae5b4c7f",
          "531fc213-6d2d-4160-bcd0-297f7284fedb",
          "073bae10-06c4-4611-a15a-e25881d2b5b6",
          "26cff01a-9176-4a9e-ac40-2a29253953b6",
          "b2364efa-9628-47fb-8496-79d06c540991",
          "4888341f-bc23-4da4-bff7-dfa51bebbad8",
          "e4dd16ae-3764-4d2c-8953-4f8659bbe16b",
          "6b90e3fc-d4bb-4305-93bb-8a44e094e1d6",
          "f64e048a-b464-4422-9ae8-af80f4956576",
          "cb604fa0-3f6e-44ce-b54e-e19b579aaccc",
          "c5a267ba-697e-4096-9865-066ba9bf1b9e",
          "10cff7a8-77d1-47a9-8e2e-5c611f1e0451",
          "d2fccfc5-cecd-40c7-bd7d-762b76501898",
          "7e6c3378-e467-423f-9371-8869dde8e934",
          "883cf744-d8e7-45a9-b52c-b11da9a46c39",
          "67eaa8d8-edbe-4010-a455-e39a37003771",
          "1c9e184e-31dc-41f4-9a14-4dbff9d01fcf",
          "0e26ea41-6e11-4511-8b2f-035e5680cc7b",
          "49d2fa91-ac2f-40d5-a6ae-03ec12cad2b5",
          "1827898c-36ae-4b55-863f-b906214e70d2",
          "4d16cfbf-2cfe-4901-ada8-4944dc27fa83",
          "575844f8-08ff-442d-9bb0-38507eb71161",
          "7be4c8e0-df5f-4892-b5ef-092d91b4738f",
          "daa9b6dd-0569-4950-9605-c4e86c99b4fc",
          "4a418424-49e3-48ee-a5b2-7ccbfc5b5bef",
          "93929ffa-b6a6-4a53-bd88-c63f3ac0ef7b",
          "2f4a694e-8eac-43b8-8dce-295d597aece8",
          "e2b55f9a-8575-485d-9250-c329351244dc",
          "70e31021-ce06-4db6-b6e8-d5d0fbecfb82",
          "96e66425-693a-4eb4-a0af-69041df97b87",
          "630e7212-990b-4124-8b2f-58e2203078f1",
          "cc80053f-296d-4f05-b94a-b90e2a3f6063",
          "c417d0ce-c094-4373-a3e0-ef2cafc38099",
          "c8a84cb9-88cc-4624-acbd-faa7db8809df",
          "1f52c03a-7c61-41d6-886b-66f23075ca2d",
          "16bfe709-d416-4a8e-b93c-bb72073c582b",
          "031a6647-3998-467d-9eae-aeef29003d82",
          "4c0393c8-d268-4041-8d04-1be59520f86c",
          "09942e90-6f01-4b3d-a551-7ae2b829534a",
          "f32f50df-3f7c-4c75-90bf-d3238410597d",
          "d685c608-6348-406a-92d7-80230261fd1d",
          "5ccd4f7c-09ed-450b-a57b-52228018b279",
          "9da9f119-78ed-42ff-b108-84472909e767",
          "5ce0d819-a920-4e5f-9dde-4011057e790f",
          "9b866f5b-518f-482a-bfad-64c5a0ae6ee2",
          "2f52855a-b26c-44b7-99e6-c856400be7c8",
          "dc0c9b71-7980-4a8a-9c64-87a9cd5f9306",
          "900d0a78-ab4c-420c-972c-edb573a19f8e",
          "ef5f8b0c-34ae-42ff-a4ab-3da69b7dc705",
          "de973e01-f760-4172-87b9-d3eea16fa695",
          "a859f3cd-f05b-4f76-b29f-787fc6555998",
          "d7ad5b8e-abb8-4486-86ab-1ef682cd88c2",
          "12a4a192-d055-432f-b6c5-721b39607958",
          "80fd790c-ce9e-4aca-95b6-32f8d4458c74",
          "e9856656-6fb4-435b-80cd-de39b9376170",
          "57c4174a-5547-4606-84ed-6100bba16ae6",
          "09a5dc3f-a437-4e9b-95e9-284390fa55d9",
          "0dc1ccc9-4825-4eb7-9da6-05f0d8871008",
          "174fbb88-aee3-4a67-aa0a-3815cd0d8035",
          "b4d25f5a-a181-45ea-ae1f-7e47385fa283",
          "bc0c256b-d537-4082-8ada-f7ca0d7a77fc",
          "846ed6fb-595e-457b-b8fd-aa7d52778b98",
          "377d9141-1369-4379-9309-b699114113c6",
          "c91c23f0-bac1-4988-9063-abc2121f8a15",
          "1b184d3c-69f3-4cf3-8c10-cad447824f7d",
          "3af60b95-1100-4f3c-bfcf-9baf5c0445ea",
          "5805a5aa-dca8-4abf-83fd-54b6c90461f4",
          "9801908d-70e3-4895-b7fa-b73b07d0a826",
          "d95eba09-af12-4c95-b467-fd1172191e17",
          "aa7f6490-6ff5-488c-9197-8b4501b3d85c",
          "e7a70446-7aac-4f2d-95ca-01573aa7cf8d"
        ];
      function k() {
        var e,
          a,
          t =
            ((e = [
              " __  __ _    _  _                            \n|  /  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |/| | / _| || / _  || | '_| ' / -_) || |\n|_|  |_|___,_|/ ___/_,_|_| |_||____|_, |\n             |__/                       |__/ "
            ]),
            (a = [
              " __  __ _    _  _                            \n|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |\n|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |\n             |__/                       |__/ "
            ]) || (a = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(a) } })
            ));
        return (
          (k = function () {
            return t;
          }),
          t
        );
      }
      var C,
        S,
        E,
        M,
        A,
        I,
        T,
        O,
        B,
        R,
        z,
        P = Math.sin,
        L = Math.cos,
        q = Math.round,
        D = Math.sqrt,
        H = Math.max,
        F = String.raw(k());
      function W() {
        for (var e = 0; e < A.length; e++) C.removeChild(A[e]);
        A = [];
        for (var a = 0; a < I.length; a++) C.removeChild(I[a]);
        (I = []),
          C.setAttribute(
            "viewBox",
            "0 0 "
              .concat(window.innerWidth, " ")
              .concat(H(100, window.innerHeight))
          ),
          (z = E.length);
        for (var t = (C.viewBox.baseVal.height - 10) / z, n = 0; n < z; n++) {
          var i = document.createElementNS(C.namespaceURI, "text");
          i.setAttribute("x", 5),
            i.setAttribute("y", n * t + 5),
            (i.style.fontSize = "".concat(0.9 * t, "px")),
            (i.style.dominantBaseline = "hanging"),
            (i.style.whiteSpace = "pre"),
            i.setAttribute("fill", "#7d9ddf"),
            C.appendChild(i),
            (A[n] = i);
        }
        A[0].textContent = "".padStart(1e3, "W");
        var r = A[0].getBBox().width / 1e3;
        (A[0].textContent = ""),
          (S = q((C.viewBox.baseVal.width - 10) / r)),
          (T = q(S / 2 - M[0].length / 2) - 1),
          (O = q(z / 2 - M.length / 2) - 1);
        for (var s = 0; s < M.length; s++) {
          var c = document.createElementNS(C.namespaceURI, "text");
          c.setAttribute("x", 5 + (T + 1) * r),
            c.setAttribute("y", s * t + 5 + (O + 1) * t),
            (c.style.fontSize = "".concat(0.9 * t, "px")),
            (c.style.dominantBaseline = "hanging"),
            (c.style.whiteSpace = "pre"),
            c.setAttribute("font-weight", "bold"),
            c.setAttribute("fill", "white"),
            C.appendChild(c),
            (I[s] = c);
        }
      }
      function G(e) {
        if (
          (requestAnimationFrame(G),
          B || (B = 0.001 * e),
          R || (R = e),
          !("visible" !== document.visibilityState || e - R < 42))
        ) {
          R = e;
          for (
            var a = 0.001 * e - B,
              t = (function (e) {
                return e < 0.5
                  ? (1 - D(1 - Math.pow(2 * e, 2))) / 2
                  : (D(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
              })(K(0.5 * (a - 1), 0, 1)),
              n = (window.innerWidth, window.innerHeight, 0);
            n < A.length;
            n++
          ) {
            for (
              var i = "", r = "", s = 1 - (2 * n) / A.length, c = 0;
              c < S;
              c++
            ) {
              var o = (2 * c) / S - 1,
                d = D(o * o + s * s),
                l = (0.1 * a) / H(0.1, d),
                f = P(l),
                b = L(l),
                u = o * f - s * b,
                m = q(((o * b + s * f + 1) / 2) * S),
                h = q(((u + 1) / 2) * E.length) % E.length,
                g =
                  m < 0 || m >= S || h < 0 || h >= A.length
                    ? " "
                    : E[h][m] || " ";
              if (
                n > O &&
                n < O + M.length + 1 &&
                c > T &&
                c < T + M[0].length + 1
              ) {
                var p = c - T - 1,
                  x = n - O - 1,
                  v = M[x][p] || g,
                  y = " " != M[x][p - 1],
                  w = " " != M[x][p + 1];
                if (" " != v || y || w) {
                  var j = g.charCodeAt(0),
                    _ = v.charCodeAt(0);
                  (r += g = String.fromCharCode(q(Z(j, _, t)))),
                    1 == t && (g = " ");
                } else r += " ";
                c == T + M[0].length &&
                  ((I[x].textContent = r),
                  I[x].setAttribute("fill-opacity", t));
              }
              i += g;
            }
            A[n].textContent = i;
          }
        }
      }
      var Z = function (e, a, t) {
          return e * (1 - t) + a * t;
        },
        K = function (e, a, t) {
          return e < a ? a : e > t ? t : e;
        };
      function V() {
        return (
          (0, r.useEffect)(function () {
            if ("?animate=false" !== document.location.search)
              return (
                (C = document.getElementById("bannerSVG")),
                (E =
                  "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic\n    /imagine city areal perspective. streets glowing, concrete architecture, green roofs, people on the streets\n    /imagine the beginning of the universe by Monet\n    /imagine looking up a never ending staircase by Jean Giraud Moebius\n    /imagine abstract, cycle, organic, powerful, behance\n    /imagine gorgeous bouquet still life painting in the style of Odilon Redon and Henri Fantin-Latour\n    /imagine a warm sunny beach near an ocean full of pikachu's\n    /imagine 3d render of gold rings, geometric, circles, triangles, psychedelic, infinity pool, eccojams, vaporwave, oneohtrix point never, golden hour, glossy reflections and light rays, portals into other worlds\n    /imagine intricate jungle landscape by albrecht durer, henri rousseau, pieter brueghel the elder, mattisse\n    /imagine cyberpunk cat rabbit hacker, googles, anime style\n    /imagine banana with glasses dancing, ghibli style\n    /imagine corgis dancing in vibrant victorian dresses, Rococo style, in a large luxurious ballroom\n    /imagine A wise/meditating/fantasy wizard sitting in complex/intricate meadow with mountains/fields, painted by Japanese artist Koji Miromoto using detailed/hyperfine/lineart/print black paper ink techniques and exotic glowy psychedelic ink, autochrome colors/style. Stylized/detailed/textured, gradients, graduated colors, fine line details.\n    /imagine 1960s illustration of the beginning of life on Earth\n    /imagine commodore 1351 mouse. 80s sythwave style. hyper realistic\n    /imagine map of steampunk desert\n    /imagine francisco goya scene oil painting watercolor sci-fi science fiction cyberpunk time machine\n    /imagine Portrait of a cyber glitch sorceress causing video corruption with her magic\n    /imagine a realistic ancient temple, crumbling stone, vines, extreme detail, statues, octane render, volumetric fog, realistic lighting, reflections\n    /imagine giant red crystals in a desert with two suns\n    /imagine Robin Williams in the style of John Allison\n    /imagine standing in front of a castle\n    /imagine a professional photorealistic Portrait of an Astronaut by Peter Mohrbacher,Shaun Tan and Seb McKinnon,realistic eyes,realistic hair,,Beautiful Hit Tech costume and Helmet details,Beautiful dramatic dark moody lighting,Cinematographic Atmosphere,photorealism glossy magazine painting,Octane Render,Deep Color,8k Resolution,High Details,Flickr,DSLR,CGsociety,Artstation\n    /imagine Matter condensed from energy, life built upon matter, consciousness upon life\n    /imagine hyperreal swirling watercolors trapped in a soap bubble, 4k render\n    /imagine beautiful painting of clouds with sunrise, by john martin, Trending on artstation, pastel aesthetic\n    /imagine modern futuristic lampshade with art nouveau inspiration\n    /imagine photo shot on Leica IIIf with 50mm f/2 Summar; 1/50 sec; f/4\n    /imagine sharp alphabet typography by Walter Gropius\n    /imagine four dogs playing poker in a crowded room, by Malcolm Liepke and Lovis Corinth, oilpainting\n    /imagine invitation made with old paper written with cursive font pyrographic words in the center | red wax seal above in the top-left corner, cinematic light, artstation\n    /imagine aisle view of the festival street market in AlUla, many booths, seating areas, natural materials, cinematic shot\n    /imagine japanese temple, sakura, detailed oil painting, by Mateusz Urbanowicz\n    /imagine a stegosaurus drawn by John Singer Sargent\n    /imagine a mysterious forest with many fireflies, trees with large roots covered in moss, green vegetation, Studio Ghibli animation style, Japanese animation film background,\n    /imagine the universe in our ancestors eyes\n    /imagine The inside of a gothic cathedral that looks like a tropical alien utopian jungle rainforest, dramatic cinematic lighting\n    /imagine A hero stands alone, artstation, highly detailed, cinematic\n    /imagine symmetric texture repetition on a tree on a beautiful mountain landscape\n    /imagine midcentury luchador mask, risograph\n    /imagine ultra detailed line drawing, black and white and red, pen and ink, high tech cyberpunk geisha with headphones and sunglasses and VR goggles in style of Shohei Otomo\n    /imagine interior of master bedroom in victorian mansion, window, dan mindel cinematography, 35mm, movie scene, pitch black, realistic lighting, perspective shots, moody atmosphere, light coming from outside, HDRI\n    /imagine the alien robot queen holding a party at the dome castle in HQ Cloud City during a technicolor sunset\n    /imagine corporate memphis style, mural, pride month, white background, vector, characters waving pride flags, celebration\n    /imagine abstract painting of coral reef\n    /imagine a calico cat taking a nap on a kiwi\n    /imagine Dreamy landscape depiction inspired by the works of Katsushika Hokusai, trending on artstation\n    /imagine garden bridge over swan pond monet garden lillies and hanging trees art\n    /imagine green dragon roosting above its lair in the ruins of a fantasy medieval city\n    /imagine rainwater flowing through a complex system of ancient stone pipes and a gargoyle watching\n    /imagine butterflies flit in a sunlit field. Hiroshige Japanese woodblock print.\n    /imagine an illustration of a wooden magic wand with an aura of void around it, stars glitter subtly around it, closeup, fantasy card game art trending on artstation concept art by Jason Chan"
                    .split("\n")
                    .map(function (e) {
                      return e.replace(/\t/g, "    ");
                    })),
                (M = F.split("\n").map(function (e) {
                  return e.replace(/\t/g, "    ");
                })),
                (A = []),
                (I = []),
                W(),
                window.addEventListener("resize", W),
                requestAnimationFrame(G),
                function () {
                  window.removeEventListener("resize", W);
                }
              );
          }, []),
          (0, n.jsx)("svg", {
            id: "bannerSVG",
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 800 400",
            style: { background: "#061434", width: "100%" }
          })
        );
      }
      var J = t(12197),
        U = t(66320),
        X = t(45332),
        $ = t(37940);
      function Q(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[a] = t),
          e
        );
      }
      function Y(e, a) {
        if (null == e) return {};
        var t,
          n,
          i = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              i = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++)
              (t = r[n]), a.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (t = r[n]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      var ee = [
          {
            name: "David Holz",
            description:
              "Previously: Founder Leap Motion, Researcher at NASA, Max Planck"
          }
        ],
        ae = [
          {
            name: "Jim Keller",
            description:
              "Lead Silicon at Apple, AMD, Tesla, Intel, Coauthor X86-64, CTO Tenstorrent"
          },
          {
            name: "Nat Friedman",
            description: "CEO Github, Chairman of GNOME Foundation"
          },
          {
            name: "Philip Rosedale ",
            description: "Founder of Second Life, CTO RealNetworks"
          },
          {
            name: "Bill Warner",
            description:
              "Founder of Avid Technology, inventor of nonlinear video editing"
          }
        ],
        te = !0;
      function ne(e) {
        var a,
          t,
          o,
          b,
          u = e.jobs,
          m = (0, r.useRef)(!1),
          h = (0, v.useRouter)(),
          p = (0, r.useState)(!1),
          x = p[0],
          y = p[1],
          j = (0, r.useState)(!1),
          N = j[0],
          k = j[1];
        return (
          (0, r.useEffect)(
            function () {
              if (x && !m.current) {
                try {
                  _(u);
                } catch (e) {
                  y(!1);
                }
                m.current = !0;
              }
            },
            [x]
          ),
          (0, r.useEffect)(function () {
            (0, i.setTimeout)(function () {
              return k(!0);
            }, 100);
          }, []),
          (0, n.jsxs)("div", {
            className:
              "overflow-x-hidden relative z-20 h-auto font-mono bg-[#060522] .scanlines",
            children: [
              (0, n.jsxs)("head", {
                children: [
                  (0, n.jsx)("style", {
                    children:
                      "html, body {\n          background: #061434;\n          scrollbar-gutter: unset !important\n        }\n        \n        body {\n          overflow-y: overlay !important\n        }"
                  }),
                  (0, n.jsx)(U.h, {
                    title: "Midjourney",
                    description:
                      "An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species."
                  })
                ]
              }),
              (0, n.jsxs)("main", {
                className: "-z-10",
                children: [
                  "discord-not-verified" ===
                    (null === (a = h.query) || void 0 === a
                      ? void 0
                      : a.error) &&
                    (0, n.jsxs)("div", {
                      className: "fixed z-[9999] w-full h-full",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "flex absolute flex-col gap-8 p-8 max-w-md bg-darkBlue-900 rounded-xl centerAbs",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "text-white",
                              children: [
                                (0, n.jsxs)("h2", {
                                  className:
                                    "flex items-center mb-4 text-2xl font-medium",
                                  children: [
                                    (0, n.jsx)(J.uy, {
                                      color: "",
                                      className: "mr-2 text-yellow-500",
                                      height: "30"
                                    }),
                                    "Sign-in Error:"
                                  ]
                                }),
                                "Looks like you tried to access with an unverified Discord account.",
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)("br", {}),
                                "Please go through the",
                                " ",
                                (0, n.jsx)("a", {
                                  href: "https://support.discord.com/hc/en-us/articles/213219267-Resending-Verification-Email",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className:
                                    "text-blue-500 underline hover:underline-offset-2",
                                  children: "Discord email verification"
                                }),
                                " ",
                                "process and try again."
                              ]
                            }),
                            (0, n.jsx)("button", {
                              className:
                                "box-border flex justify-center items-center py-2 px-3 h-auto font-medium bg-slate-700 hover:bg-slate-800 rounded",
                              onClick: function () {
                                return h.push("/home", void 0, { shallow: !1 });
                              },
                              children: "Dismiss"
                            })
                          ]
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "fixed top-0 left-0 -z-10 w-full h-full bg-darkBlue-500/90"
                        })
                      ]
                    }),
                  (null === (t = h.query) || void 0 === t ? void 0 : t.error) &&
                    "discord-not-verified" !==
                      (null === (o = h.query) || void 0 === o
                        ? void 0
                        : o.error) &&
                    (0, n.jsxs)("div", {
                      className: "fixed z-[9999] w-full h-full",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "flex absolute flex-col gap-8 p-8 w-full max-w-md font-sans bg-darkBlue-900 rounded-xl centerAbs",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "text-white",
                              children: [
                                (0, n.jsxs)("h2", {
                                  className:
                                    "flex items-center mb-4 text-lg font-medium",
                                  children: [
                                    (0, n.jsx)(J.uy, {
                                      color: "",
                                      className: "mr-2 text-yellow-500",
                                      height: "24"
                                    }),
                                    "Sign-in Error:"
                                  ]
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "p-2 mt-6 font-mono text-sm text-left text-slate-500 bg-darkBlue-700 rounded-md",
                                  children:
                                    null === (b = h.query) || void 0 === b
                                      ? void 0
                                      : b.error
                                })
                              ]
                            }),
                            (0, n.jsx)("button", {
                              className:
                                "box-border flex justify-center items-center py-2 px-3 h-auto font-medium bg-slate-700 hover:bg-slate-800 rounded",
                              onClick: function () {
                                return (0, g.signOut)({
                                  callbackUrl: $.jk.home
                                });
                              },
                              children: "Dismiss"
                            })
                          ]
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "fixed top-0 left-0 -z-10 w-full h-full bg-darkBlue-500/90"
                        })
                      ]
                    }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col justify-start items-center",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "relative z-10 w-screen h-screen",
                        style: {
                          background:
                            "linear-gradient(0deg, #060522  30%, #061434)"
                        },
                        children: [
                          (0, n.jsx)("div", {
                            className: "absolute inset-x-14 bottom-8",
                            children: ie(y)
                          }),
                          (0, n.jsxs)(s.u, {
                            id: "waves",
                            show: !0,
                            unmount: !1,
                            appear: !0,
                            enter: " duration-1000 delay-300 ",
                            enterFrom: "inset-0 rounded-none border-[#061434]",
                            enterTo:
                              "inset-4 sm:inset-6 lg:inset-12 border-[#061434] !bottom-36 md:!bottom-24 rounded-3xl",
                            className:
                              "flex overflow-hidden absolute justify-center items-center bg-[#061434] border-2 border-[#061434] shadow-lg shadow-darkBlue-900/20 scanlines",
                            children: [
                              N && (0, n.jsx)(V, {}),
                              (0, n.jsx)(re, {
                                as: "button",
                                onClick: function () {
                                  return document
                                    .getElementById("about")
                                    .scrollIntoView({ behavior: "smooth" });
                                },
                                className:
                                  "aspect-square absolute right-1/2 bottom-4 z-10 bg-slate-800/20 hover:bg-slate-700/50 translate-x-1/2",
                                children: (0, n.jsx)(c, {
                                  height: 20,
                                  className: "inline text-slate-100"
                                })
                              })
                            ]
                          }),
                          (0, n.jsx)(s.u, {
                            show: !0,
                            unmount: !1,
                            appear: !0,
                            enter: " duration-1000 !flex delay-300 ",
                            enterFrom: "inset-0 rounded-none border-[#061434]",
                            enterTo:
                              "inset-4 sm:inset-6 lg:inset-12 border-[#061434] !bottom-36 md:!bottom-24 rounded-3xl opacity-0",
                            className:
                              "hidden overflow-hidden absolute justify-center items-center bg-[#061434] border-2 border-[#061434] shadow-lg shadow-darkBlue-900/20 scanlines",
                            children: (0, n.jsx)(s.u.Child, {
                              enter:
                                "transition-opacity duration-300 delay-500 ease-in",
                              className:
                                "flex absolute inset-0 z-50 justify-center items-center w-full h-full bg-[#061434] rounded-3xl opacity-100 pointer-events-none",
                              children: (0, n.jsx)(J.gb, {
                                height: 32,
                                className: "inline mr-2 animate-spin"
                              })
                            })
                          }),
                          (0, n.jsxs)("div", {
                            id: "imageContainerParent",
                            className: (0, X.CN)(
                              "inset-4 sm:inset-6 lg:inset-12 !bottom-36 md:!bottom-24 overflow-hidden absolute bg-[#061434] rounded-3xl border-2 border-[#061434] shadow-lg shadow-darkBlue-900/20 scanlines",
                              !x && "hidden"
                            ),
                            children: [
                              (0, n.jsx)("div", { id: "imageContainer" }),
                              (0, n.jsx)(re, {
                                as: "button",
                                onClick: function () {
                                  return document
                                    .getElementById("about")
                                    .scrollIntoView({ behavior: "smooth" });
                                },
                                className:
                                  "aspect-square absolute right-1/2 bottom-4 z-[1000000] bg-slate-800/20 hover:bg-slate-700/50 translate-x-1/2",
                                children: (0, n.jsx)(c, {
                                  height: 20,
                                  className: "inline text-slate-100"
                                })
                              })
                            ]
                          })
                        ]
                      }),
                      (0, n.jsxs)("div", {
                        className: "relative w-full h-auto",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "fixed inset-x-0 top-0 z-[1] p-4 px-6 max-xl:bg-[#060522] max-lg:border-b border-white/5 md:px-12",
                            children: ie(y, !0)
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex overflow-hidden relative flex-col gap-16 p-8 mx-auto max-md:mt-16 w-full max-w-4xl leading-relaxed text-blue-100 md:p-16",
                            children: [
                              (0, n.jsxs)("section", {
                                id: "",
                                className:
                                  "flex flex-col gap-12 text-slate-300",
                                children: [
                                  (0, n.jsx)("div", {
                                    id: "about",
                                    className: "absolute max-md:-top-16 top-0"
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, n.jsxs)("h1", {
                                        className:
                                          "flex relative text-3xl leading-none text-white",
                                        children: [
                                          (0, n.jsx)(d.Z, {
                                            height: 32,
                                            className:
                                              "right-full mr-2 text-teal-500 md:absolute"
                                          }),
                                          "About"
                                        ]
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsx)("p", {
                                        className: "",
                                        children:
                                          "Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species."
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsx)("p", {
                                        className: "",
                                        children:
                                          "We are a small self-funded team focused on design, human infrastructure, and AI. We have 11 full-time staff and an incredible set of advisors."
                                      })
                                    ]
                                  }),
                                  (0, n.jsxs)("div", {
                                    id: "team",
                                    className:
                                      "flex flex-col gap-12 opacity-95",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        id: "executives",
                                        children: [
                                          (0, n.jsx)("h2", {
                                            className:
                                              "mb-2 text-xl leading-none text-slate-100",
                                            children: "Executives"
                                          }),
                                          (0, n.jsx)("div", {
                                            className:
                                              "grid grid-cols-1 gap-4 md:grid-cols-2",
                                            children: ee.map(function (e, a) {
                                              return (0,
                                              n.jsxs)("div", { children: [(0, n.jsx)("h3", { className: "font-medium", children: e.name }), (0, n.jsx)("p", { className: "text-sm italic text-slate-400", children: e.description })] }, e.name);
                                            })
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        id: "advisors",
                                        children: [
                                          (0, n.jsx)("h2", {
                                            className:
                                              "mb-2 text-xl text-slate-100 ",
                                            children: "Advisors"
                                          }),
                                          (0, n.jsx)("div", {
                                            className:
                                              "grid grid-cols-1 gap-4 md:grid-cols-2",
                                            children: ae.map(function (e, a) {
                                              return (0,
                                              n.jsxs)("div", { className: "", children: [(0, n.jsx)("h3", { className: "font-medium", children: e.name }), (0, n.jsx)("p", { className: "text-sm italic text-slate-400", children: e.description })] }, e.name);
                                            })
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        id: "research-engineering",
                                        children: [
                                          (0, n.jsx)("h2", {
                                            className:
                                              "mb-2 text-xl text-slate-100 ",
                                            children: "Research and Engineering"
                                          }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "grid grid-cols-4 gap-4 md:grid-cols-8",
                                            children: [
                                              (0, n.jsx)("p", {
                                                children: "Daniel"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Max"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Jack"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Thomas"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Red"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Sam"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Nadir"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Sebastian"
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        id: "legal-finance",
                                        children: [
                                          (0, n.jsx)("h2", {
                                            className:
                                              "mb-2 text-xl text-slate-100 ",
                                            children: "Legal and Finance"
                                          }),
                                          (0, n.jsxs)("p", {
                                            className:
                                              "grid grid-cols-2 gap-4 w-full md:grid-cols-4",
                                            children: [
                                              (0, n.jsxs)("p", {
                                                children: [
                                                  "Max Sills",
                                                  (0, n.jsx)("p", {
                                                    className:
                                                      "text-sm italic text-slate-400",
                                                    children: "legal advisor"
                                                  })
                                                ]
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Nadia Ali"
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        id: "community-management",
                                        children: [
                                          (0, n.jsx)("h2", {
                                            className:
                                              "mb-2 text-xl text-slate-100 ",
                                            children: "Community Management"
                                          }),
                                          (0, n.jsxs)("p", {
                                            className:
                                              "grid grid-cols-2 gap-4 w-full md:grid-cols-4",
                                            children: [
                                              (0, n.jsx)("p", {
                                                children: "fnuckle (Katryna)"
                                              }),
                                              (0, n.jsx)("p", {
                                                children: "Ancient Chaos"
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        id: "legal-finance",
                                        children: [
                                          (0, n.jsx)("h2", {
                                            className:
                                              "mb-2 text-xl text-slate-100",
                                            children:
                                              "Discord Moderators and Guides"
                                          }),
                                          (0, n.jsx)("p", {
                                            className:
                                              "grid grid-cols-4 gap-3 gap-y-1 w-full text-sm md:grid-cols-8",
                                            children: [
                                              "Afterburner",
                                              "AmirKerr",
                                              "bartek",
                                              "Blue Man",
                                              "ChrisViau",
                                              "cody boy",
                                              "croakie",
                                              "dezm0n",
                                              "DigitalDragon",
                                              "Eikyuu",
                                              "Feonix",
                                              "fractl",
                                              "isaacq",
                                              "jayscott",
                                              "kav2k",
                                              "MatthewHaggett",
                                              "Meggirbot",
                                              "Reiko",
                                              "Sanne (Ms. Unicorn)",
                                              "schofe",
                                              "Shade",
                                              "Sirkut",
                                              "Spookydan",
                                              "SquireZed",
                                              "starshadowx2",
                                              "Tallath",
                                              "Xaphedo",
                                              "ajmars",
                                              "ameades",
                                              "Apricus",
                                              "bonnie bear",
                                              "clarinet",
                                              "classpectanon",
                                              "dafyomilimerick",
                                              "Dee",
                                              "dudu",
                                              "eku",
                                              "Eojin\u2019s Reviews",
                                              "fab1an",
                                              "fl4min_xX",
                                              "firefly",
                                              "gigglethumps",
                                              "Goofball",
                                              "Historian",
                                              "Hoxxonia",
                                              "Ippity",
                                              "jrdsctt",
                                              "Kath",
                                              "Kevazy",
                                              "Kinky Kong",
                                              "Krakput",
                                              "Kyun",
                                              "Larc",
                                              "Marigold",
                                              "Molang",
                                              "noodlecake",
                                              "PtitCitron",
                                              "Replicant",
                                              "Roc",
                                              "ShaneMcG",
                                              "Soar",
                                              "STON3ZY",
                                              "SunshineyDay",
                                              "TaylorV",
                                              "theo3",
                                              "Trent",
                                              "Weaving Light",
                                              "Zu"
                                            ].map(function (e, a) {
                                              return (0,
                                              n.jsx)("p", { className: "text-slate-400 odd:text-slate-300 truncate", title: e, children: e }, e);
                                            })
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "overflow-hidden max-w-full text-slate-800/50 whitespace-nowrap",
                                children:
                                  "========================================================================================================================================================================================================================================================================================================================================================================================================================================================================"
                              }),
                              (0, n.jsxs)("section", {
                                className:
                                  "flex relative flex-col gap-8 text-slate-300",
                                children: [
                                  (0, n.jsx)("div", {
                                    id: "careers",
                                    className: "absolute max-md:-top-16"
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, n.jsxs)("h1", {
                                        className:
                                          "flex relative text-3xl leading-none text-white",
                                        children: [
                                          (0, n.jsx)(l.Z, {
                                            height: 32,
                                            className:
                                              "right-full mr-2 text-indigo-600 md:absolute"
                                          }),
                                          " ",
                                          "Careers"
                                        ]
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsx)("p", {
                                        className: "",
                                        children:
                                          "We're a small, self-funded, fully-distributed team and we're actively hiring!"
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsx)("p", {
                                        className: "",
                                        children:
                                          "Come help us scale, explore, and build humanist infrastructure focused on amplifying the human mind and spirit."
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsxs)("p", {
                                        className: "",
                                        children: [
                                          "If you're sure you can help, but don't see a position that fits,",
                                          " ",
                                          (0, n.jsx)("a", {
                                            href: "mailto:careers@midjourney.com",
                                            className:
                                              "text-blue-400 underline hover:underline-offset-2",
                                            children: "email us"
                                          }),
                                          "."
                                        ]
                                      }),
                                      (0, n.jsx)("br", {}),
                                      "We look forward to hearing from you."
                                    ]
                                  })
                                ]
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "overflow-hidden max-w-full text-slate-800/50 whitespace-nowrap",
                                children:
                                  "========================================================================================================================================================================================================================================================================================================================================================================================================================================================================"
                              }),
                              (0, n.jsxs)("section", {
                                className:
                                  "flex relative flex-col gap-8 text-slate-300",
                                children: [
                                  (0, n.jsx)("div", {
                                    id: "contact",
                                    className: "absolute max-md:-top-16"
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, n.jsxs)("h1", {
                                        className:
                                          "flex relative text-3xl leading-none text-white",
                                        children: [
                                          (0, n.jsx)(f.Z, {
                                            height: 32,
                                            className:
                                              "right-full mr-2 text-amber-600 md:absolute"
                                          }),
                                          " ",
                                          "Contact"
                                        ]
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsx)("div", {
                                        className: "",
                                        children: (0, n.jsxs)("p", {
                                          children: [
                                            "For product support or questions please",
                                            " ",
                                            (0, n.jsx)("a", {
                                              href: "https://discord.gg/midjourney",
                                              className:
                                                "text-blue-400 underline hover:underline-offset-2",
                                              children: "join our Discord"
                                            }),
                                            " ",
                                            "and ask questions in our #support chatrooms."
                                          ]
                                        })
                                      }),
                                      (0, n.jsx)("br", {}),
                                      (0, n.jsxs)("div", {
                                        className: "",
                                        children: [
                                          (0, n.jsx)("p", {
                                            className: "",
                                            children:
                                              "For Journalist inquiries:"
                                          }),
                                          (0, n.jsx)("a", {
                                            href: "mailto:press@midjourney.com",
                                            className:
                                              "text-blue-400 underline hover:underline-offset-2 transition-all",
                                            children: "press@midjourney.com"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("br", {})
                                    ]
                                  })
                                ]
                              }),
                              (0, n.jsxs)("section", {
                                className: "flex gap-8 justify-center",
                                children: [
                                  (0, n.jsx)("a", {
                                    className:
                                      "text-sm hover:underline underline-offset-2 opacity-70",
                                    href: "https://docs.midjourney.com/docs/terms-of-service",
                                    children: "Terms of Service"
                                  }),
                                  (0, n.jsx)("a", {
                                    className:
                                      "text-sm hover:underline underline-offset-2 opacity-70",
                                    href: "https://docs.midjourney.com/docs/privacy-policy",
                                    children: "Privacy Policy"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)(w(), {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"
              }),
              (0, n.jsx)(w(), {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js"
              })
            ]
          })
        );
      }
      function ie(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.jsxs)("div", {
          className: (0, X.CN)(
            "flex flex-col gap-4 justify-end items-center max-h-fit font-sans origin-bottom md:flex-row-reverse md:gap-8 md:justify-between",
            a && "max-md:items-stretch"
          ),
          children: [
            (0, n.jsxs)("div", {
              className: (0, X.CN)(
                "flex flex-1 gap-4 justify-end",
                a && "max-md:justify-between"
              ),
              children: [
                (0, n.jsx)(x(), {
                  href: "https://discord.gg/midjourney",
                  passHref: !0,
                  children: (0, n.jsxs)(re, {
                    as: "a",
                    className:
                      "text-emerald-50 bg-emerald-900/20 hover:bg-emerald-900",
                    children: [
                      (0, n.jsx)(b.Z, {
                        height: 20,
                        className: "inline text-emerald-500"
                      }),
                      "Join the Beta"
                    ]
                  })
                }),
                (0, n.jsx)(ce, {
                  className:
                    "text-yellow-50 bg-yellow-900/20 hover:bg-yellow-900",
                  children: function (e) {
                    var a = e.loading;
                    return (0, n.jsxs)(n.Fragment, {
                      children: [
                        a
                          ? (0, n.jsx)(J.gb, {
                              height: 20,
                              className: "inline text-yellow-500 animate-spin"
                            })
                          : (0, n.jsx)(u.Z, {
                              height: 20,
                              className: "inline text-yellow-500"
                            }),
                        (0, n.jsx)("span", {
                          className: "",
                          children: "Sign In"
                        })
                      ]
                    });
                  }
                })
              ]
            }),
            !a &&
              (0, n.jsx)(re, {
                as: "button",
                title: "Swap Header",
                onClick: function () {
                  return e(function (e) {
                    return !e;
                  });
                },
                className:
                  "hidden bg-indigo-800/20 hover:bg-indigo-800 md:block",
                children: (0, n.jsx)(m.Z, {
                  height: 20,
                  className: "inline text-indigo-400"
                })
              }),
            (0, n.jsxs)("div", {
              className: (0, X.CN)("flex flex-1 gap-4 ", a && "max-md:hidden"),
              children: [
                (0, n.jsx)(x(), {
                  href: $.jk.docs,
                  passHref: !0,
                  children: (0, n.jsxs)(re, {
                    as: "a",
                    className:
                      "text-orange-50 bg-orange-900/20 hover:bg-orange-900",
                    children: [
                      (0, n.jsx)(o, {
                        height: 20,
                        className: "inline text-orange-500"
                      }),
                      "Get Started"
                    ]
                  })
                }),
                (0, n.jsx)(re, {
                  as: "button",
                  onClick: function () {
                    return e(function (e) {
                      return !e;
                    });
                  },
                  className: "block !p-2 bg-indigo-800/20 md:hidden",
                  children: (0, n.jsx)(m.Z, {
                    height: 20,
                    className: "inline text-indigo-400"
                  })
                }),
                (0, n.jsx)(x(), {
                  href: "/showcase",
                  passHref: !0,
                  children: (0, n.jsxs)(re, {
                    as: "a",
                    className: "text-rose-50 bg-rose-900/20 hover:bg-rose-900",
                    children: [
                      (0, n.jsx)(h.Z, {
                        height: 20,
                        className: "inline text-rose-500"
                      }),
                      "Showcase"
                    ]
                  })
                })
              ]
            })
          ]
        });
      }
      function re(e) {
        var a = e.children,
          t = Y(e, ["children"]);
        return (0, n.jsx)(
          t.as,
          (function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = null != arguments[a] ? arguments[a] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (a) {
                  Q(e, a, t[a]);
                });
            }
            return e;
          })({}, t, {
            className: (0, X.CN)(
              "flex gap-2 justify-center items-center w-fit font-medium",
              "basis-1 gap-2 justify-center items-center p-2 px-5 min-w-max text-sm font-bold text-center hover:.!text-[#09073a] hover:.bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:.outline-white .outline  rounded-full hover:.outline-offset-4 active:.outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50",
              t.className
            ),
            children: a
          })
        );
      }
      function se(e) {
        var a = "";
        return (
          e &&
            (Array.isArray(e) && (e = e[0]),
            (a =
              e && e.startsWith("http")
                ? e
                : "".concat(window.location.origin).concat(e || ""))),
          a
        );
      }
      function ce(e) {
        var a = e.children,
          t = e.className,
          i = (0, v.useRouter)(),
          s = i.query.callbackUrl || "",
          c = (0, r.useState)(!1),
          o = c[0],
          d = c[1];
        return (0, n.jsx)(re, {
          as: "button",
          className: t,
          onClick: function () {
            o ||
              (d(!0),
              fetch("/app", { method: "HEAD", credentials: "include" })
                .then(function (e) {
                  if (e.redirected && e.url.includes("/home"))
                    return (
                      (0, j.B)("redirect_sign_in", {
                        category: "Auth",
                        label: "Redirect Sign In"
                      }),
                      (0, g.signIn)("discord", { callbackUrl: se(s) })
                    );
                  i.push("/app");
                })
                .catch(function (e) {
                  d(!1), alert(e);
                }));
          },
          children: (0, n.jsx)(a, { loading: o })
        });
      }
    },
    99647: function (e, a, t) {
      var n = t(83454);
      !(function () {
        var a = {
          619: function () {
            !(function (e, a) {
              "use strict";
              if (!e.setImmediate) {
                var t,
                  i = 1,
                  r = {},
                  s = !1,
                  c = e.document,
                  o = Object.getPrototypeOf && Object.getPrototypeOf(e);
                (o = o && o.setTimeout ? o : e),
                  "[object process]" === {}.toString.call(e.process)
                    ? (t = function (e) {
                        n.nextTick(function () {
                          f(e);
                        });
                      })
                    : (function () {
                        if (e.postMessage && !e.importScripts) {
                          var a = !0,
                            t = e.onmessage;
                          return (
                            (e.onmessage = function () {
                              a = !1;
                            }),
                            e.postMessage("", "*"),
                            (e.onmessage = t),
                            a
                          );
                        }
                      })()
                    ? (function () {
                        var a = "setImmediate$" + Math.random() + "$",
                          n = function (t) {
                            t.source === e &&
                              "string" === typeof t.data &&
                              0 === t.data.indexOf(a) &&
                              f(+t.data.slice(a.length));
                          };
                        e.addEventListener
                          ? e.addEventListener("message", n, !1)
                          : e.attachEvent("onmessage", n),
                          (t = function (t) {
                            e.postMessage(a + t, "*");
                          });
                      })()
                    : e.MessageChannel
                    ? (function () {
                        var e = new MessageChannel();
                        (e.port1.onmessage = function (e) {
                          f(e.data);
                        }),
                          (t = function (a) {
                            e.port2.postMessage(a);
                          });
                      })()
                    : c && "onreadystatechange" in c.createElement("script")
                    ? (function () {
                        var e = c.documentElement;
                        t = function (a) {
                          var t = c.createElement("script");
                          (t.onreadystatechange = function () {
                            f(a),
                              (t.onreadystatechange = null),
                              e.removeChild(t),
                              (t = null);
                          }),
                            e.appendChild(t);
                        };
                      })()
                    : (t = function (e) {
                        setTimeout(f, 0, e);
                      }),
                  (o.setImmediate = function (e) {
                    "function" !== typeof e && (e = new Function("" + e));
                    for (
                      var a = new Array(arguments.length - 1), n = 0;
                      n < a.length;
                      n++
                    )
                      a[n] = arguments[n + 1];
                    var s = { callback: e, args: a };
                    return (r[i] = s), t(i), i++;
                  }),
                  (o.clearImmediate = d);
              }
              function d(e) {
                delete r[e];
              }
              function l(e) {
                var a = e.callback,
                  t = e.args;
                switch (t.length) {
                  case 0:
                    a();
                    break;
                  case 1:
                    a(t[0]);
                    break;
                  case 2:
                    a(t[0], t[1]);
                    break;
                  case 3:
                    a(t[0], t[1], t[2]);
                    break;
                  default:
                    a.apply(undefined, t);
                }
              }
              function f(e) {
                if (s) setTimeout(f, 0, e);
                else {
                  var a = r[e];
                  if (a) {
                    s = !0;
                    try {
                      l(a);
                    } finally {
                      d(e), (s = !1);
                    }
                  }
                }
              }
            })(
              "undefined" === typeof self
                ? "undefined" === typeof t.g
                  ? this
                  : t.g
                : self
            );
          }
        };
        "undefined" !== typeof __nccwpck_require__ &&
          (__nccwpck_require__.ab = "//");
        a[619](), (e.exports = {});
      })();
    },
    602: function (e, a, t) {
      !(function () {
        var a = {
            832: function (e, a, n) {
              var i =
                  ("undefined" !== typeof t.g && t.g) ||
                  ("undefined" !== typeof self && self) ||
                  window,
                r = Function.prototype.apply;
              function s(e, a) {
                (this._id = e), (this._clearFn = a);
              }
              (a.setTimeout = function () {
                return new s(r.call(setTimeout, i, arguments), clearTimeout);
              }),
                (a.setInterval = function () {
                  return new s(
                    r.call(setInterval, i, arguments),
                    clearInterval
                  );
                }),
                (a.clearTimeout = a.clearInterval =
                  function (e) {
                    e && e.close();
                  }),
                (s.prototype.unref = s.prototype.ref = function () {}),
                (s.prototype.close = function () {
                  this._clearFn.call(i, this._id);
                }),
                (a.enroll = function (e, a) {
                  clearTimeout(e._idleTimeoutId), (e._idleTimeout = a);
                }),
                (a.unenroll = function (e) {
                  clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                }),
                (a._unrefActive = a.active =
                  function (e) {
                    clearTimeout(e._idleTimeoutId);
                    var a = e._idleTimeout;
                    a >= 0 &&
                      (e._idleTimeoutId = setTimeout(function () {
                        e._onTimeout && e._onTimeout();
                      }, a));
                  }),
                n(505),
                (a.setImmediate =
                  ("undefined" !== typeof self && self.setImmediate) ||
                  ("undefined" !== typeof t.g && t.g.setImmediate) ||
                  (this && this.setImmediate)),
                (a.clearImmediate =
                  ("undefined" !== typeof self && self.clearImmediate) ||
                  ("undefined" !== typeof t.g && t.g.clearImmediate) ||
                  (this && this.clearImmediate));
            },
            505: function (e) {
              "use strict";
              e.exports = t(99647);
            }
          },
          n = {};
        function i(e) {
          var t = n[e];
          if (void 0 !== t) return t.exports;
          var r = (n[e] = { exports: {} }),
            s = !0;
          try {
            a[e].call(r.exports, r, r.exports, i), (s = !1);
          } finally {
            s && delete n[e];
          }
          return r.exports;
        }
        i.ab = "//";
        var r = i(832);
        e.exports = r;
      })();
    },
    64810: function (e, a, t) {
      "use strict";
      var n = t(67294);
      const i = n.forwardRef(function (e, a) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: a
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          })
        );
      });
      a.Z = i;
    },
    59700: function (e, a, t) {
      "use strict";
      var n = t(67294);
      const i = n.forwardRef(function (e, a) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: a
            },
            e
          ),
          n.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          })
        );
      });
      a.Z = i;
    }
  }
]);
