var sketch = {
  "metadata": {
    "width": 912,
    "height": 662,
    "wsp-version": "4.5.1-alpha",
    "wsp-build-number": "1026.7-wsp-widgets",
    "wsp-build-stamp": "ip-10-149-70-76/20180827113948",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Sample Tool.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Geneva\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "3",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 662,
          "right": 912
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "blue"
          },
          "Straights": {
            "color": "rgb(139,0,0)"
          },
          "Curves": {
            "color": "rgb(0,100,0)"
          },
          "Interior": {
            "color": "rgb(238,130,238)"
          },
          "Plot": {
            "color": "rgb(130,0,75)"
          },
          "PointLocus": {
            "color": "rgb(0,0,139)"
          },
          "Selection": {
            "color": "fuchsia"
          },
          "CoordSys": {
            "color": "rgb(211,211,211)"
          },
          "ActionButton": {
            "color": "rgb(0,165,255)"
          },
          "Picture": {
            "color": "blue"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Geneva\", sans-serif",
              "font-size": 9,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Geneva\", sans-serif",
              "font-size": 9
            },
            "Measurement": {
              "font-family": "\"Geneva\", sans-serif",
              "font-size": 9
            },
            "Action": {
              "label": {
                "font-family": "\"Geneva\", sans-serif",
                "font-size": 9
              }
            },
            "Table": {
              "font-family": "\"Geneva\", sans-serif",
              "font-size": 9
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Geneva\", sans-serif",
              "font-size": 9
            }
          }
        }
      }
    }
  ],
  "tools": [
    {
      "metadata": {
        "name": "Reflection"
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 289,
              "y": 246
            }
          },
          "toolRole": "given",
          "label": "First Point",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": -17,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 396,
              "y": 464
            }
          },
          "toolRole": "given",
          "label": "Second Point",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": -17,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Line",
          "label": "j",
          "style": {
            "color": "navy",
            "label": {
              "showLabel": true,
              "labelOffsetX": 2,
              "labelOffsetY": -1,
              "labelParam": 0.2467230766622,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 556,
              "y": 232
            }
          },
          "toolRole": "given",
          "label": "x",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "mirror": "3"
          },
          "constraint": "Reflect",
          "label": "x'",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        }
      }
    },
    {
      "metadata": {
        "name": "Second Reflection"
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 289,
              "y": 246
            }
          },
          "toolRole": "given",
          "label": "First Point",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": -17,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 396,
              "y": 464
            }
          },
          "toolRole": "given",
          "label": "Second Point",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": -17,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Line",
          "label": "j",
          "style": {
            "color": "navy",
            "label": {
              "showLabel": true,
              "labelOffsetX": 2,
              "labelOffsetY": -1,
              "labelParam": 0.2467230766622,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 556,
              "y": 232
            }
          },
          "toolRole": "given",
          "label": "x'",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "4",
            "mirror": "3"
          },
          "constraint": "Reflect",
          "label": "x''",
          "style": {
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 16,
              "font-weight": "normal",
              "font-style": "normal",
              "text-decoration": "none",
              "letter-spacing": "none",
              "color": "black"
            }
          }
        }
      }
    }
  ]
};