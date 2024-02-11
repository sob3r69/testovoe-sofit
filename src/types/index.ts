export type TraceData = Pick<Trace, 'uuid' | 'timestamp' | 'history' | 'version'>;

// Большой тип, который я просто скопировал из Intelisense своей IDE, поэтому он далеко не идеальный
export type Trace = {
  uuid: string;
  timestamp: string;
  checker_id: number;
  checker_name: string;
  history: {
    uuid: string;
    class: string;
    plate: string;
    tracks: {
      camera: number;
      points: (
        | {
            plate: {
              center: {
                x: number;
                y: number;
              };
              region: {
                lt: {
                  x: number;
                  y: number;
                };
                rt: {
                  x: number;
                  y: number;
                };
                lb: {
                  x: number;
                  y: number;
                };
                rb: {
                  x: number;
                  y: number;
                };
              };
              interior: {
                lt: {
                  x: number;
                  y: number;
                };
                rt: {
                  x: number;
                  y: number;
                };
                lb: {
                  x: number;
                  y: number;
                };
                rb: {
                  x: number;
                  y: number;
                };
              };
              text: string;
              recogn_confidence: number;
              detect_confidence: number;
              contrast: number;
            };
            vehicle_region: {
              lt: {
                x: number;
                y: number;
              };
              rt: {
                x: number;
                y: number;
              };
              lb: {
                x: number;
                y: number;
              };
              rb: {
                x: number;
                y: number;
              };
            };
            detection_state: {
              local_timestamp: string;
              framespeed_timestamp: string;
              car_class: string;
              object_id: number;
              tracking_info: {
                prev_iou: number;
                prev_plate_iou: number;
                prev_pspeed: null;
                kalman_error: null;
                diff_symbols: number;
                match_elapsed_msec: number;
              };
            };
            distance: {
              by_plate: {
                x: number;
                y: number;
              };
              by_plate_projection: {
                x: number;
                y: number;
              };
              by_vehicle: {
                x: number;
                y: number;
              };
            };
            vehicle_lights: {
              regions: never[];
              confidence: null;
              turned_on: boolean;
            };
            persons: {
              belt: {
                vehicle_region: {
                  region: {
                    lt: {
                      x: number;
                      y: number;
                    };
                    rt: {
                      x: number;
                      y: number;
                    };
                    lb: {
                      x: number;
                      y: number;
                    };
                    rb: {
                      x: number;
                      y: number;
                    };
                  };
                  confidence: number;
                };
                is_fastened: null;
              };
              with_phone: null;
              phone: null;
              steering_wheel: null;
            }[];
          }
        | {
            plate: {
              center: {
                x: number;
                y: number;
              };
              region: {
                lt: {
                  x: number;
                  y: number;
                };
                rt: {
                  x: number;
                  y: number;
                };
                lb: {
                  x: number;
                  y: number;
                };
                rb: {
                  x: number;
                  y: number;
                };
              };
              interior: {
                lt: {
                  x: number;
                  y: number;
                };
                rt: {
                  x: number;
                  y: number;
                };
                lb: {
                  x: number;
                  y: number;
                };
                rb: {
                  x: number;
                  y: number;
                };
              };
              text: string;
              recogn_confidence: number;
              detect_confidence: number;
              contrast: number;
            };
            vehicle_region: {
              lt: {
                x: number;
                y: number;
              };
              rt: {
                x: number;
                y: number;
              };
              lb: {
                x: number;
                y: number;
              };
              rb: {
                x: number;
                y: number;
              };
            };
            detection_state: {
              local_timestamp: string;
              framespeed_timestamp: string;
              car_class: string;
              object_id: number;
              tracking_info: {
                prev_iou: number;
                prev_plate_iou: number;
                prev_pspeed: number;
                kalman_error: number;
                diff_symbols: null;
                match_elapsed_msec: number;
              };
            };
            distance: {
              by_plate: {
                x: number;
                y: number;
              };
              by_plate_projection: {
                x: number;
                y: number;
              };
              by_vehicle: {
                x: number;
                y: number;
              };
            };
            vehicle_lights: {
              regions: never[];
              confidence: null;
              turned_on: boolean;
            };
            persons: {
              belt: {
                vehicle_region: {
                  region: {
                    lt: {
                      x: number;
                      y: number;
                    };
                    rt: {
                      x: number;
                      y: number;
                    };
                    lb: {
                      x: number;
                      y: number;
                    };
                    rb: {
                      x: number;
                      y: number;
                    };
                  };
                  confidence: number;
                };
                is_fastened: null;
              };
              with_phone: null;
              phone: null;
              steering_wheel: null;
            }[];
          }
      )[];
      speed: {
        by_plate: {
          speed: number;
          confidence: {
            Duration: number;
            Speed: number;
          };
        };
        by_plate_projection: {
          speed: number;
          confidence: {
            Duration: number;
            PlateProjection: number;
            Speed: number;
            MovedDistance: number;
          };
        };
        by_plate_width_correction: {
          speed: number;
          confidence: {
            Duration: number;
            Speed: number;
            PlateWidth: number;
          };
        };
        by_vehicle: {
          speed: number;
          confidence: {
            Speed: number;
            Duration: number;
          };
        };
        by_approximation: {
          speed: number;
          confidence: {
            Duration: number;
            Approximation: number;
            PlateProjection: number;
            Speed: number;
            MovedDistance: number;
          };
        };
      };
      defects: never[];
      assigned_radar_id: null;
      radar_history: {
        alive_tracks: unknown;
        assigned_tracks: never[];
      };
      assignment_fail_reason: string;
      assignment_confidence: number;
      touch_points: null;
      alt_touch_points: null;
      a_model: {
        camera_to_road: number[];
        road_to_camera: number[];
      };
      d_model: {
        camera_to_road: number[];
        road_to_camera: number[];
      };
    }[];
    traffic_light: {
      states: unknown;
    };
  };
  speed_zones: {
    '1': {
      x: number;
      y: number;
    }[];
  };
  version: {
    tag: string;
    revision: string;
    lprsdk: string;
    model: string;
  };
  models_descrs: {
    '1': {
      amodel: {
        date: string;
        hash: string;
      };
      dmodel: {
        date: string;
        hash: string;
      };
    };
  };
};
