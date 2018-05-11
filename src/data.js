/**
 * Created by Jordan3D on 5/8/2018.
 */
//sample of data for Flags component
export const view = {
  buttonContainer1: {
    type: "container",
    button1: {
      type: "button",
      value: "off"
    }
  },
  buttonContainer2: {
    type: "container",
    button2: {
      type: "button",
      value: "off"
    }
  },
  colorsContainer1:{
    type: "container",
    red1: {
      type: "color",
      value: "rgba(255,0,0,1.0)",
      isOn: {
        button1: {
          value: "on"
        },
        button6: {
          value: "on"
        },
        button4: {
          value: "off"
        }
      }
    },
    blue1: {
      type: "color",
      value: "rgba(0,0,255,1.0)",
      isOn: {
        button1: {
          value: "on"
        },
        button6: {
          value: "on"
        },
        button2: {
          value: "off"
        },
        button3: {
          value: "on"
        }
      }
    },
    green1: {
      type: "color",
      value: "rgba(0,255,0,1.0)",
      isOn: {
        button2: {
          value: "on"
        },
        button5: {
          value: "on"
        },
        button3: {
          value: "off"
        },
        button6: {
          value: "off"
        }
      }
    },
    yellow1: {
      type: "color",
      value: "rgba(255,255,0,1.0)",
      isOn: {
        button2: {
          value: "off"
        },
        button3: {
          value: "on"
        },
        button4: {
          value: "on"
        },
        button6: {
          value: "on"
        }
      }
    }
  },
  avatar: {
    buttonContainer3: {
      type: "container",
      button3: {
        type: "button",
        value: "off"
      }
    },
    buttonContainer4: {
      type: "container",
      button4: {
        type: "button",
        value: "off"
      }
    },
    avatar: {
      buttonContainer5: {
        type: "container",
        button5: {
          type: "button",
          value: "off"
        }
      },
      avatar: {
        buttonContainer6: {
          type: "container",
          button6: {
            type: "button",
            value: "off"
          }
        },
      }
    }
  }
};

export const decompose = {
  entities: {
    buttons: {
      button1: {
        value: "off"
      },
      button2: {
        value: "off"
      },
      button3: {
        value: "off"
      },
      button4: {
        value: "off"
      },
      button5: {
        value: "off"
      },
      button6: {
        value: "off"
      }
    },
    colors: {
      red1: {
        value: "rgba(255,0,0,1.0)",
        isOn: {
          button1: {
            type:"buttons",
            id: "button1",
            value: "on"
          },
          button6: {
            type:"buttons",
            id: "button6",
            value: "on"
          },
          button4: {
            type:"buttons",
            id: "button4",
            value: "off"
          }
        }
      },
      blue1: {
        value: "rgba(0,0,255,1.0)",
        isOn: {
          button1: {
            type:"buttons",
            id: "button1",
            value: "on"
          },
          button6: {
            type:"buttons",
            id: "button6",
            value: "on"
          },
          button2: {
            type:"buttons",
            id: "button2",
            value: "off"
          },
          button3: {
            type:"buttons",
            id: "button3",
            value: "on"
          }
        }
      },
      green1: {
        value: "rgba(0,255,0,1.0)",
        isOn: {
          button2: {
            type:"buttons",
            id: "button2",
            value: "on"
          },
          button5: {
            type:"buttons",
            id: "button5",
            value: "on"
          },
          button3: {
            type:"buttons",
            id: "button3",
            value: "off"
          },
          button6: {
            value: "off"
          }
        }
      },
      yellow1: {
        value: "rgba(255,255,0,1.0)",
        isOn: {
          button2: {
            type:"buttons",
            id: "button2",
            value: "off"
          },
          button3: {
            type:"buttons",
            id: "button3",
            value: "on"
          },
          button4: {
            type:"buttons",
            id: "button4",
            value: "on"
          },
          button6: {
            type:"buttons",
            id: "button6",
            value: "on"
          }
        }
      }
    },
    containers: {
      buttonContainer1: [{type:"buttons", id: "button1"}],
      buttonContainer2: [{type:"buttons",id: "button2"}],
      colorsContainer1: [
        {type:"colors",id: "red1"},
        {type:"colors",id: "blue1"},
        {type:"colors",id: "green1"},
        {type:"colors",id: "yellow1"}
        ],
      buttonContainer3: [{type:"buttons",id: "button3"}],
      buttonContainer4: [{type:"buttons",id: "button4"}],
      buttonContainer5: [{type:"buttons",id: "button5"}],
      buttonContainer6: [{type:"buttons",id: "button6"}],
    }
  }
}
